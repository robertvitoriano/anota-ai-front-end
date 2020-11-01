import React from "react";
import { Translucent, Modal, Wrapper,Input,Button } from "./styled";
const CreateCategoryModal = () => {
  return (
    <Wrapper>
      <Modal>
        <h1>Nova Categoria</h1>
        <Input/>
        <Button><h1>Criar Categoria</h1></Button>
      </Modal>
      <Translucent />
    </Wrapper>
  );
};

export default CreateCategoryModal;
