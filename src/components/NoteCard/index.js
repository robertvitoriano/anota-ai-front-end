import React from "react";
import { Wrapper, NoteBody, Title, RadioButton } from "./styled";

const NoteCard = ({ title, body,id,categoryId,selectedNotes,onSelect }) => {
  return (
    <Wrapper>
      <RadioButton
        type="radio"
        onClick={()=>onSelect([...selectedNotes,id])}
      />
      <Title>{title}</Title>
      <NoteBody>{body}</NoteBody>
    </Wrapper>
  );
};

export default NoteCard;
