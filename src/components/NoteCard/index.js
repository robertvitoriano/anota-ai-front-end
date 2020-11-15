import React,{useState} from "react";
import { Wrapper, NoteBody, Title, RadioButton } from "./styled";

const NoteCard = ({ title, body,id,selectedNotes,onSelect }) => {

  const[wasSelected,setWasSeleceted] = useState(false);
  const handleSelection = async() =>{

    await setWasSeleceted(!wasSelected);

     switch (wasSelected) {
       case true:
        onSelect([...selectedNotes,id])
         break;
      case false:
        const remainingNotes = selectedNotes.filter(selectedNote=>selectedNote !==id);
        onSelect(remainingNotes);

     }
  }
  return (
    <Wrapper>
      <RadioButton
        type="radio"
        onClick={()=>handleSelection()}
        
      />
      <Title>{title}</Title>
      <NoteBody>{body}</NoteBody>
    </Wrapper>
  );
};

export default NoteCard;
