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
function AddCategory({ match }) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const loadNotes= async () => {
      const { userId, categoryId } = match.params;
      const response = await api.get(`/notes'`, {
        headers: {
          userAuth: localStorage.getItem("Authorization"),
        },
      });
      console.log(response.data);

    };
    loadNotes();
  }, []);
  return (
    <>
      <Header match={match} />
      <Wrapper>
        <h1>{title}</h1>
        <Content>
          <NotesWrapper>
            <NoteCard
              title="primeira anotação"
              body="Esse é o corpo da minha primeira anotação"
            />
            {notes
              ? notes.map((note) => (
                  <NoteCard
                    title={note.title}
                    body={note.body}
                  />
                ))
              : "Não há anotações"}
          </NotesWrapper>
          <ButtonsWrapper>
            <Button>Adicionar</Button>
            <Button>remover</Button>
          </ButtonsWrapper>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}

export default AddCategory;
