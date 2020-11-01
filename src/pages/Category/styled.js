import styled from "styled-components";
import image from "./typewriter.jpg";


export const Wrapper= styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items:center;
`;





export const Content = styled.div`
  width: fit-content;
  height: 100%;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;

  div::-webkit-scrollbar {
    width: 1em;
  }
  div::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  div::-webkit-scrollbar-thumb {
    background-color: #817059;
    border-radius: 10px;
  }
  position:relative;
  bottom:60px;

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

export const Button = styled.button`
  background-color: #c9b18f;
  width: 200px;
  height: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  border: 3px solid #9c8a71;
  box-shadow: black 1px 1px 1px 1px;
  border-radius: 3px;
  justify-content: center;
  margin-top: 5px;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
`;
