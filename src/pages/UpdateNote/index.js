import React, { useEffect, useState } from 'react'
import api from './../../services/api'
import Header from '../../components/Header'
import Footer from './../../components/Footer'
import Loading from './../../components/Loading'
import Swal from 'sweetalert2'
import './update-note.css'

const UpdateNote = ({ history, match }) => {

    const [noteTitle, setNoteTitle] = useState('')
    const [noteBody, setNoteBody] = useState('')
    const [isLoading, setIsLoading] = useState(false)
 

    useEffect(() => {
        async function loadNote() {

            const note = await api.get('/notes/' + match.params.noteId, {
                headers: {
                    userauth: localStorage.getItem('Authorization')
                }
            })
            setNoteTitle(note.data.title);
            setNoteBody(note.data.body);
            
        }
        loadNote();

    },[match.params.noteId])

    

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await api.post('/notes/'+match.params.noteId,{
            title:noteTitle,
            body:noteBody
        },{
            headers:{
                userauth: localStorage.getItem('Authorization')
            }
        })
        setIsLoading(false)

        Swal.fire(
           'Você Alterou',
           'Anotação alterada com sucesso',
           'success'
         )
    }
    const handleDelete = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Você realmente deseja deletar',
            text: "Não será possível reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'deletar',
            cancelButtonText: 'cancelar',

          }).then(async(result) => {
            if (result.isConfirmed) {
              
              setIsLoading(true)
              
              await api.delete('/notes/' + match.params.noteId, {  
                  headers: {
                      userauth: localStorage.getItem('Authorization')
                  }
              }
              )
              const userId = localStorage.getItem('userId')
              setIsLoading(false)
      
              Swal.fire(
                 'Você deletou',
                 'Anotação deletada com sucesso',
                 'success'
               ).then(()=>history.push(`/user/${userId}`))
            }
          })


          
          
          
        
    }


    return (
        <div className="update-container">
            <Header match={match}></Header>
            <div className="note-card">
            {isLoading ? <Loading show={isLoading}/>: ''}

                 <form className="note-card" onSubmit={(e=>{handleUpdate(e)})}>
                    <input 
                    className="note-title-creation" 
                    value={noteTitle} 
                    onChange={(e) => { 
                        const value = e.target.value;
                        setNoteTitle(value) 

                    }}/>
                    <textarea className="note-body-creation" value={noteBody} onChange={(event) => { setNoteBody(event.target.value)
                  }}>
                    </textarea>
                    <button
                    className="note-button"
                    >Alterar</button>
                </form>
                <button onClick={(e)=>{
                         handleDelete(e)
                }} 
                className="note-button"
                
                >Deletar</button>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default UpdateNote;