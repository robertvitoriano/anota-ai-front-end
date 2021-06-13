import React, { useEffect, useState } from "react";
import api from "./../../services/api";
import {
  Wrapper,
  NotesWrapper,
  ButtonsWrapper,
  Button,
  Content,
} from "./styled";
import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import NoteCard from "../../components/NoteCard";
import Loading from './../../components/Loading'
function Category({ match,history }) {

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const[selectedNotes,setSelectedNotes] = useState([]);
  const[isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const loadCategoryInfo = async () => {

      const { userId, categoryId } = match.params;
      setIsLoading(true)
      const response = await api.get(`/${userId}/categories/${categoryId}`, {
        headers: {
          userAuth: localStorage.getItem("Authorization"),
        },
      });
      setIsLoading(false)
      const { category} = response.data;
      const categoryNotes = response.data.notes;
      setTitle(category.name);
      setNotes(categoryNotes);
    };
    loadCategoryInfo();
  }, [match.params]);

  const handleDelete = async(selectedNotes) =>{
    const {categoryId } = match.params;
    setIsLoading(true)

    await api.patch(`/categories/${categoryId}/remove`,{
      notesId:selectedNotes,
    },{
      headers: {
        userAuth: localStorage.getItem("Authorization"),
      }
    });
    const remainingNotes = notes.filter((note)=>!selectedNotes.includes(note._id))
    setNotes(remainingNotes);
    setIsLoading(false)
  }
  return (
    <>
      <Header match={match} onClick={()=>{setIsLoading(false)}} />
      <Wrapper onClick={()=>{setIsLoading(false)}}>
      {isLoading?(<Loading show={isLoading}/>):''}
        <h1>{title}</h1>
        <Content>
          <NotesWrapper>
            {notes
              ? notes.map((note) => (
                  <NoteCard
                    title={note.title}
                    body={note.body}
                    id={note._id}
                    onSelect={setSelectedNotes}
                    selectedNotes={selectedNotes}
                    hasRadio={true}

                  />
                ))
              : "Não há anotação nessa categoria"}
          </NotesWrapper>
          <ButtonsWrapper>
            
            <Button onClick={()=>history.push(`/${match.params.userId}/${match.params.categoryId}/add`)}>Adicionar</Button>
            <Button onClick={()=>handleDelete(selectedNotes)}>Deletar</Button>

            
          </ButtonsWrapper>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Category;
