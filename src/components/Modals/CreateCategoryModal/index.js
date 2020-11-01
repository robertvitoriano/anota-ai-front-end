import React,{useState} from "react";
import { Translucent, Modal, Wrapper,Input,Button } from "./styled";
const CreateCategoryModal = ({onCreate,match}) => {
const[category,setCategory] = useState('')
  return (
    <Wrapper>
      <Modal>
        <h1>Nova Categoria</h1>
        <Input value={category} onChange={e=>setCategory(e.target.value)}/>
        <Button onClick={()=>onCreate(category,match.params.userId )}><h1>Criar Categoria</h1></Button>
      </Modal>
      <Translucent />
    </Wrapper>
  );
};

export default CreateCategoryModal;
