import React,{useState} from 'react'
import './new-note.css'
import api from '../../services/api.js'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import Swal from 'sweetalert2'
import Loading from '../../components/Loading'

const NewNote=({match,history})=>{
    const[body,setBody] = useState('');
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    
     async function handleSubmit(event){
         event.preventDefault();
         setIsLoading(true)
         await api.post('/notes', { title, body }, {headers: { userauth: localStorage.getItem("Authorization")}})
         setTitle('')
         setBody('')
         setIsLoading(false)
         Swal.fire(
            'Você Criou!',
            'Anotação criada com sucesso',
            'success'
          )
     }
    return(<div className="new-note-container" onClick={()=>setIsLoading(false)}>
        <Header match={match}></Header>
        <div className="note-container">
            {isLoading ? <Loading show={isLoading}/>: ''}
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
            >Criar Anotação</button>
            </form>
        </div>
        <Footer></Footer>

    </div>)
}


export default NewNote;