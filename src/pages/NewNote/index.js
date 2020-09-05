import React,{useState} from 'react'
import './new-note.css'
import api from '../../services/api.js'
import Header from './../../components/Header'
import Footer from './../../components/Footer'

const NewNote=({match,history})=>{
    const[body,setBody] = useState('');
    const [title, setTitle] = useState('');

    const token = localStorage.getItem("Authorization");
    console.log(token);
     async function handleSubmit(event){
         event.preventDefault();
         await api.post('/notes', { title, body }, {headers: { userauth: localStorage.getItem("Authorization")}})
         const userId =   localStorage.getItem('userId');
         history.push(`/user/${userId}`)
     }
    return(<div className="new-note-container">
        <Header match={match}></Header>
        <div className="note-container">
            <form onSubmit={handleSubmit}>
            <input placeholder="digite o titulo da sua anotação" 
            name="title" 
            className="note-title-creation" 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            ></input>


            <textarea placeholder=" digite o conteudo da sua anotação aqui" 
            name="body" 
            className="note-body-creation"
            value={body}
            onChange={e=>setBody(e.target.value)}
            ></textarea>
            <button type="submit"
             className="note-button"
            >Salvar Anotação</button>
            </form>
        </div>
        <Footer></Footer>

    </div>)
}


export default NewNote;