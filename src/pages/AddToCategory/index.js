import React, { useEffect, useState } from "react";
import api from "./../../services/api";
import {
  Wrapper,
  NotesWrapper,
  ButtonsWrapper,
  Button,
  Content,
} from "./styled";
import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import NoteCard from "../../components/NoteCard";
function AddToCategory({ match }) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedNotes,setSelectedNote] = useState([]);

  useEffect(() => {
    const loadNotes= async () => {
      const { userId, categoryId } = match.params;
      
      const response = await api.get(`/notes`, {
        headers: {
          userAuth: localStorage.getItem("Authorization"),
        },
      });
      const allNotes = response.data;
      const filteredNotes = allNotes.filter(note=>note.categoryId !==categoryId)
      setNotes(filteredNotes);


    };
    loadNotes();
  }, []);

  const handleAddToCategory = async (selectedNotes,categoryId) =>{
    
    const response = await api.post(`/categories/${categoryId}/associate`,{
      notesId:selectedNotes,
    },{
      headers: {
        userAuth: localStorage.getItem("Authorization"),
      }
    })
    console.log(response);
    console.log(selectedNotes)

  }


  return (
    <>
      <Header match={match} />
      <Wrapper>
        <h1>Adicione ou remova uma anotação à {title}</h1>
        <Content>
          <NotesWrapper>
            {notes
              ? notes.map((note) => (
                  <NoteCard
                    title={note.title}
                    body={note.body}
                    onSelect={setSelectedNote}
                    id={note._id}
                    categoryId={match.params.categoryId}
                    selectedNotes={selectedNotes}
                  />
                ))
              : "Não há anotações"}
          </NotesWrapper>
          <ButtonsWrapper>
            <Button onClick={()=>handleAddToCategory(selectedNotes,match.params.categoryId)}>Adicionar</Button>
            <Button>remover</Button>
          </ButtonsWrapper>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}

export default AddToCategory;
