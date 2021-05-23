import React from "react";
import { Translucent, Circle, Wrapper, Modal } from "./styled";
import './rotation.css'

const Loading = () => {
  return (
    <Wrapper>
      <Translucent />
        <Modal>
          <Circle className="rotate" />
        </Modal>
    </Wrapper>
  );
};

export default Loading;
