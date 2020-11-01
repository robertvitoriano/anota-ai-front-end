import React from "react";
import { Wrapper, NoteBody, Title, RadioButton } from "./styled";

const NoteCard = ({ title, body }) => {
  return (
    <Wrapper>
      <RadioButton
        type="radio"
      />
      <Title>{title}</Title>
      <NoteBody>{body}</NoteBody>
    </Wrapper>
  );
};

export default NoteCard;
