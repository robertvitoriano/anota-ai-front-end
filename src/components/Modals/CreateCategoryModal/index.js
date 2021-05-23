import React, { useState } from "react";
import {
  Translucent,
  Modal,
  Wrapper,
  Input,
  Button,
  ButtonsWrapper,
} from "./styled";

import Loading from './../../Loading'
const CreateCategoryModal = ({ onCreate,onCancel, match }) => {
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const handleCategoryCreation = async() =>{
    setIsLoading(true)
    await onCreate(category, match.params.userId)
    setIsLoading(false)

  }
  return (
    <Wrapper>
      {isLoading ? <Loading show={isLoading}/> :''}
      <Modal>
        <h1>Nova Categoria</h1>
        <Input value={category} onChange={(e) => setCategory(e.target.value)} />
        <ButtonsWrapper>
          <Button onClick={handleCategoryCreation}>
            <h1>Criar Categoria</h1>
          </Button>
          <Button onClick={() =>onCancel(false) }>
            <h1>Cancelar</h1>
          </Button>
        </ButtonsWrapper>
      </Modal>
      <Translucent />
    </Wrapper>
  );
};

export default CreateCategoryModal;
