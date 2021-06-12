import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 8888;
`;

export const Translucent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 60%;
  position: absolute;
`;

export const Modal = styled.div`
  width: 800px;
  height: 300px;
  background-color: #E2C69E;
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  border: 3px solid #9c8a71;
  border-radius: 30px;
  padding-bottom:15px;

`;

export const Title = styled.h1`

color:#373737;
position: relative;
bottom:30px;

`