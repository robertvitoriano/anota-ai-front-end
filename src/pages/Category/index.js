import React from "react";
import { Wrapper, NotesWrapper, ButtonsWrapper, Button } from "./styled";
import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import NoteCard from "../../components/NoteCard";
function Category({ match }) {
  return (
    <>
      <Header match={match} />
      <Wrapper imgUrl>
        <NotesWrapper>
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
          <NoteCard
            title="primeira anotação"
            body="Esse é o corpo da minha primeira anotação"
          />
        </NotesWrapper>
        <ButtonsWrapper>
          <Button>Adicionar</Button>
          <Button>remover</Button>
        </ButtonsWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Category;
