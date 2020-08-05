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

    

    // const handleUpdate = async () => {
    //     await api.patch('/notes/:id',{
    //         title:updatedTitle,
    //         body:updatedBody
    //     },{
    //         headers:{
    //             userauth: localStorage.getItem('Authorization')
    //         }
    //     })


    // }


    return (
        <di className="container">
            <div className="note-card">
                 <form className="note-card" >
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