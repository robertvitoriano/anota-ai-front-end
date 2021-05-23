import React from "react";
import { Translucent, Circle, Wrapper, Modal } from "./styled";
import './animations.css'

const Loading = () => {
  return (
    <Wrapper>
      <Translucent />
        <Modal className="grow">
          <Circle className="rotate" />
        </Modal>
    </Wrapper>
  );
};

export default Loading;
