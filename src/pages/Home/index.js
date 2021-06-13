import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import api from "../../services/api";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import NoteCard from "../../components/NoteCard";
import arrow from "./arrow.png";
import hamburguerMenu from "./Component 1 – 1@2x.png";
import Loading from "../../components/Loading";

const Home = ({ match }) => {
  const [notes, setNotes] = useState([]);
  const [initialNote, setInitialNote] = useState(0);
  const shownNotesRef = useRef([]);
  const [isLoading,setIsLoading] = useState(true);
  const history = useHistory();



  useEffect(() => {
    
    async function loadNotes() {
      try{
        const response = await api.get("/notes", {
          headers: {
            userauth: localStorage.getItem("Authorization"),
            notes,
          },
        });
        setIsLoading(false)

        if (response.data[initialNote])
          shownNotesRef.current.push(response.data[initialNote]);
  
        if (response.data[initialNote + 1])
          shownNotesRef.current.push(response.data[initialNote + 1]);
  
        if (response.data[initialNote + 2])
          shownNotesRef.current.push(response.data[initialNote + 2]);
  
        if (response.data[initialNote + 3])
          shownNotesRef.current.push(response.data[initialNote + 3]);
  
        if (response.data[initialNote + 4])
          shownNotesRef.current.push(response.data[initialNote + 4]);
  
        if (response.data[initialNote + 5])
          shownNotesRef.current.push(response.data[initialNote + 5]);
  
        setNotes(shownNotesRef.current);
  
        shownNotesRef.current = [];

      }catch(e){
        console.error(e);
        setIsLoading(false);
      }

    }
    loadNotes();
  }, [initialNote, notes]);

  async function handleUpdate(id) {
    localStorage.setItem("userId", match.params.userId);
    history.push(`/${id}/update`);
  }

  function handleNextNotesButton(e) {
    e.preventDefault();
    setInitialNote(initialNote + 5);
  }
  function handlePreviousNotesButton() {
    setInitialNote(initialNote - 5);
  }


  return (
    <div className="home-container" onClick={()=>setIsLoading(false)}>
     {isLoading ? <Loading show={isLoading}/>:''}
      <Header match={match}></Header>
      <div className="hamburguer-menu">
        <img className="hamburguer-menu-icon" src={hamburguerMenu}  alt="hamburger menu"/>
      </div>
      <div className="home-content">
        {notes.length > 5 ? (
          <div
            className="next-button"
            onClick={(e) => handleNextNotesButton(e)}
          >
            <img className="arrow-icon" src={arrow} alt="arrow" />
          </div>
        ) : (
          ""
        )}

        <div className="notes-container">
          {notes.length > 0 ? (
            <ul className="notes-list">
              {notes.map((note, index) => (
                <a
                  key={note._id}
                  onClick={() => {
                    handleUpdate(note._id);
                  }}
                  href="some"
                >
                  <NoteCard
                    title={note.title}
                    body={note.body}
                    id={note._id}
                    hasRadio={false}
                  />
                </a>
              ))}
            </ul>
          ) : (
            <h1 className="no-note-message">Nenhuma anotação ainda</h1>
          )}
        </div>

        {initialNote >= 5 ? (
          <div className="previous-button" onClick={handlePreviousNotesButton}>
            <img className="arrow-icon previous-icon" src={arrow} alt="arrow" />
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
