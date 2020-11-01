import React, { useState } from "react";
import {
  Translucent,
  Modal,
  Wrapper,
  Input,
  Button,
  ButtonsWrapper,
} from "./styled";
const CreateCategoryModal = ({ onCreate,onCancel, match }) => {
  const [category, setCategory] = useState("");
  return (
    <Wrapper>
      <Modal>
        <h1>Nova Categoria</h1>
        <Input value={category} onChange={(e) => setCategory(e.target.value)} />
        <ButtonsWrapper>
          <Button onClick={() => onCreate(category, match.params.userId)}>
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
