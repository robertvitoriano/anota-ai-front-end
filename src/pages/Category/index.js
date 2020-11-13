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
function Category({ match,history }) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const loadCategoryInfo = async () => {
      const { userId, categoryId } = match.params;
      const response = await api.get(`/${userId}/categories/${categoryId}`, {
        headers: {
          userAuth: localStorage.getItem("Authorization"),
        },
      });
      const { category} = response.data;
      const categoryNotes = response.data.notes;
      setTitle(category.name);
      setNotes(categoryNotes);
      console.log("Essas são as anotações",response.data);
    };
    loadCategoryInfo();
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
              : "Não há anotação nessa categoria"}
          </NotesWrapper>
          <ButtonsWrapper>
            <Button onClick={()=>history.push(`/${match.params.userId}/${match.params.categoryId}/add`)}>Modificar</Button>
            
          </ButtonsWrapper>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Category;
