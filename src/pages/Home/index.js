import React, { useEffect, useState,useRef } from 'react';
import { useHistory } from 'react-router-dom'
import './home.css'
import api from '../../services/api'
import Header from './../../components/Header'
import arrow from './arrow.png'


const Home = ({ match }) => {
    const [notes, setNotes] = useState([]);
    const[initialNote,setInitialNote] = useState(0);
    const [lastNote, setLastNote] = useState(7);
    const shownNotesRef = useRef([]);

    


    const history = useHistory();

    useEffect(() => {
        async function loadNotes() {
            const response = await api.get('/notes', {
                headers: {
                    userauth: localStorage.getItem("Authorization"),notes
                },
            })
      

            shownNotesRef.current.push(
              response.data[initialNote],
              response.data[initialNote + 1],
              response.data[initialNote + 2],
              response.data[initialNote + 3],
              response.data[initialNote + 4],
              response.data[initialNote + 5]
            );
            shownNotesRef.current.map((note,index)=>{
                if(note===undefined){
                    response.data.splice(index);
                }
            })
            
            setNotes(shownNotesRef.current);
             

           shownNotesRef.current = [];

        }
        loadNotes();
        console.log(initialNote);

    },[initialNote])


    async function handleUpdate(id) {
        localStorage.setItem("userId", match.params.userId)
        history.push(`/${id}/update`);


    }

    function handleNextNotesButton(e) {
        e.preventDefault()
             setInitialNote(initialNote + 5);

        

    }
        function handlePreviousNotesButton() {

                setInitialNote(initialNote-5);

        }


    return (
      <div className="home-container">
        <Header match={match}>{initialNote}</Header>

        <div className="home-content">
          <div className="next-button" onClick={e=>handleNextNotesButton(e)}>
            <img className="arrow-icon" src={arrow} />
          </div>
          <div className="notes-container">
            {notes.length > initialNote ? (
              <ul className="notes-list">
                {notes.map((note, index) => (
                  <a
                    key={note._id}
                    onClick={() => {
                      handleUpdate(note._id);
                    }}
                    href="#"
                  >
                    <li className="note-container">
                      <div className="note-title">
                        <h2>{note.title}</h2>
                      </div>
                      <div className="note-body-list">
                        <p>{note.body}</p>
                      </div>
                    </li>
                  </a>
                ))}
              </ul>
            ) : (
              <h1>Nenhuma anotação ainda</h1>
            )}
          </div>
          {initialNote >= 5 ? (
            <div
              className="previous-button"
              onClick={handlePreviousNotesButton}
            >
              <img className="arrow-icon previous-icon" src={arrow} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
}


export default Home;