import styled from "styled-components";
import image from "./typewriter.jpg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  div::-webkit-scrollbar {
    width: 1em;
  }
  div::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  div::-webkit-scrollbar-thumb {
    background-color: #817059;
    border-radius: 10px;
  }
`;

export const NotesWrapper = styled.div`
  margin-top: 20vh;
  list-style: none;
  display: grid;
  grid-template-columns: 20vw 20vw 20vw;
  grid-gap: 8%;
  position: absolute;
  position: relative;
  right: 20px;
  bottom: 30px;
  height: 600px;
  width: 1400px;
  overflow-y: scroll;

  -webkit-scrollbar {
    width: 1em;
  }
  -webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  -webkit-scrollbar-thumb {
    background-color: #817059;
    border-radius: 10px;
  }
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
