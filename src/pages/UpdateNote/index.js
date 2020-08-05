import React, { useEffect, useState } from 'react'
import api from './../../services/api'

import './update-note.css'
const UpdateNote = ({ history, match }) => {

    const [noteTitle, setNoteTitle] = useState('')
    const [noteBody, setNoteBody] = useState('')
 

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

    },[])

    

    const handleUpdate = async (e) => {
        e.preventDefault();
        await api.post('/notes/'+match.params.noteId,{
            title:noteTitle,
            body:noteBody
        },{
            headers:{
                userauth: localStorage.getItem('Authorization')
            }
        })
        const userId = localStorage.getItem('userId')
        history.push(`/user/${userId}`)
    }


    return (
        <di className="container">
            <div className="note-card">
                 <form className="note-card" onSubmit={(e=>{handleUpdate(e)})}>
                    <input 
                    className="note-title" 
                    value={noteTitle} 
                    onChange={(e) => { 
                        const value = e.target.value;
                        setNoteTitle(value) 

                    }}/>
                    <textarea className="note-body" value={noteBody} onChange={(event) => { setNoteBody(event.target.value)
                  }}>
                    </textarea>
                    <button>Alterar</button>
                </form>
            </div>
        </di>
    )
}

export default UpdateNote;