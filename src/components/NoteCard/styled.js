import styled from 'styled-components';


export const Wrapper = styled.div`
display:flex;
flex-direction:column;
position:relative;
`
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

export const RadioButton = styled.input`
position:relative;
top:15px;
right:180px;
`