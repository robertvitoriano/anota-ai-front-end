import React,{useState,useEffect} from "react";
import { Wrapper, NoteBody, Title, RadioButton } from "./styled";

const NoteCard = ({ title, body,id,selectedNotes,onSelect,hasRadio}) => {

  const [wasChecked,setWasChecked] = useState(false)
   useEffect(()=>{

    const handleSelection = () =>{
      console.log('has changed')
      console.log(id)
      if(selectedNotes){
        switch(wasChecked){
          case true:
           onSelect([...selectedNotes,id])
            break;
          case false:
            const remainingNotes = selectedNotes.filter((note)=>note!==id)
           onSelect(remainingNotes);
           break;
          
          default: console.log("selected notes",selectedNotes);
        }
        
      }
    }
    handleSelection()

   },[id, onSelect, selectedNotes, wasChecked])
  return (
    <Wrapper>
     {hasRadio&&( <RadioButton
        type="radio"
        onClick={()=>setWasChecked(!wasChecked)}
        checked={wasChecked}
      />)}
      <Title>{title}</Title>
      <NoteBody>{body}</NoteBody>
    </Wrapper>
  );
};

export default NoteCard;
