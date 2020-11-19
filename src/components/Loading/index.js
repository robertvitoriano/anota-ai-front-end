import React from "react";
import { Translucent, Circle, Wrapper,CircleHalf } from "./styled";
import './rotation.css'

const Loading = () => {
  return (
    <Wrapper>
      <Translucent  />
     <Circle className="rotate"/>
    </Wrapper>
  );
};

export default Loading;
