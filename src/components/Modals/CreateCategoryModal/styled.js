import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
`;

export const Translucent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 60%;
  position:absolute;
  
`;

export const Modal = styled.div`
  width: 800px;
  height: 600px;
  background-color: white;
  position:relative;
  z-index:4;
`;
