import styled from "styled-components";
import image from "./typewriter.jpg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  justify-content:center;
`;

export const NotesWrapper = styled.div`
  margin-top: 20vh;
  list-style: none;
  display: grid;
  grid-template-columns: 20vw 20vw 20vw;
  grid-gap: 8%;
  position: absolute;
  position:relative;
  right:20px;
  bottom:30px;
  height:600px;
  width:1400px;
  overflow-y:scroll;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  width: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
export const NoteBody = styled.div`
  box-sizing: border-box;
  font-size: 2rem;
  border: #9b9686 solid 8px;
  height: 26vh;
  width: 20vw;
  overflow: hidden;
  background-color: rgb(228, 208, 208);
  border-radius: 4%;
`;
