import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Translucent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled.div`
 width:300px;
  height:300px;
  border:20px solid transparent;
  border-bottom-color:#7E8374;
  border-left-color:#7E8374;
  border-radius:50%;
  z-index: 3;
  position:relative;
`;