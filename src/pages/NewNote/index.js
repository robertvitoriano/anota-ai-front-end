import React,{useState} from 'react'
import './new-note.css'
import api from '../../services/api.js'

const NewNote=({match,history})=>{
    const[body,setBody] = useState('');
    const [title, setTitle] = useState('');

    const token = localStorage.getItem("Authorization");
    console.log(token);
     async function handleSubmit(event){
         event.preventDefault();
         await api.post('/notes', { title, body }, {headers: { userauth: localStorage.getItem("Authorization")}})
         history.push(`/user/${match.params.userId}`)
     }
    return(<div className="container">
        <div className="note-container">
            <form onSubmit={handleSubmit}>
            <input placeholder="digite o titulo da sua anotação" 
            name="title" 
            className="note-title" 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            ></input>


            <textarea placeholder=" digite o conteudo da sua anotação aqui" 
            name="body" 
            className="note-body"
            value={body}
            onChange={e=>setBody(e.target.value)}
            ></textarea>
            <button type="submit">Salvar Anotação</button>
            </form>
        </div>


    </div>)
}


export default NewNote;