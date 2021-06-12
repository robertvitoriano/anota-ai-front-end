import React from 'react'
import {
  Translucent,
  Modal,
  Wrapper,
  Title
} from "./styled";

const ModalComponent = ({ children, title, setDisplayModal }) => {


  return (
    <Wrapper>
      <Modal>
        <Title>{title}</Title>
        {children}
      </Modal>
      <Translucent onClick={()=>setDisplayModal(false)}/>
    </Wrapper>
  )

}


export default ModalComponent