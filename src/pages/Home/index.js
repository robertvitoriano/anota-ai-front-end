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
            setNotes(shownNotesRef.current);

        }
        loadNotes();
    },initialNote)


    async function handleUpdate(id) {
        localStorage.setItem("userId", match.params.userId)
        history.push(`/${id}/update`);


    }

    function handleNextNotesButton() {
       setInitialNote(initialNote + 6);

    }
        function handlePreviousNotesButton() {

                setInitialNote(initialNote-6);

        }


    return (
      <div className="home-container">
        <Header match={match}></Header>

        <div className="home-content">
          <div className="next-button" onClick={handleNextNotesButton}>
            <img className="arrow-icon" src={arrow} />
          </div>
          <div className="notes-container">
            {notes.length > initialNote ? (
              <ul className="notes-list">
                {notes.map((note, index) => (
                  <a
                    key={notes[index]._id}
                    onClick={() => {
                      handleUpdate(notes[index]._id);
                    }}
                    href="#"
                  >
                    <li className="note-container">
                      <div className="note-title">
                        <h2>{notes[index].title}</h2>
                      </div>
                      <div className="note-body-list">
                        <p>{notes[index].body}</p>
                      </div>
                    </li>
                  </a>
                ))}
              </ul>
            ) : (
              <h1>Nenhuma anotação ainda</h1>
            )}
          </div>
          {initialNote > 5 ? (
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