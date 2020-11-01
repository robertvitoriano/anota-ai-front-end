import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
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
  justify-content: space-around;
  flex-direction:column;
  align-items:center;
  border: 3px solid #9c8a71;
  border-radius: 30px;
  padding-bottom:15px;

`;

export const Input = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 30px;
  font-size:30px;
  height:50px;
  outline: none;
  padding-left:15px;
`;

export const Button = styled.button`
 padding:3px 4px;
 background-color:#C9B18F;
 color:#373737;
 border: 3px solid #9c8a71;
 box-shadow: black 1px 1px 1px 1px;

 h1{
   font-weight:bold;
   font-family: 'Roboto Slab', serif;
   font-size:22px;
 }


`
export const ButtonsWrapper = styled.div`

display:flex;
flex-direction:row;
justify-content:space-around;
width:300px;

`