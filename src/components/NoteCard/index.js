import React from "react";
import { Wrapper, NoteBody, Title } from "./styled";

const NoteCard = ({ title, body }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <NoteBody>{body}</NoteBody>
    </Wrapper>
  );
};


export default NoteCard;