import React,{useState,useEffect} from 'react'
import './index.css'
import api from '../../services/api.js'

const NewPost=({match})=>{
     const[body,setBody] = useState('');
    const [title, setTitle] = useState('');





    
     async function handleSubmit(event){
         event.preventDefault();
         await api.post('/posts',{
             headers: {
                 user: match.params.userId
             },
             title,
             body,

         })
           console.log(match.params.userId);
     }




    return(<div className="container">
        <h1>{match.params.userId}</h1>
        <div className="post-container">
            <form onSubmit={handleSubmit}>
            <input placeholder="digite o titulo da sua postagem" 
            name="title" 
            className="post-title" 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            ></input>


            <textarea placeholder=" digite o conteudo do seu post aqui" 
            name="body" 
            className="post-body"
            value={body}
            onChange={e=>setBody(e.target.value)}
            ></textarea>
            <button type="submit">Postar</button>
            </form>
        </div>


    </div>)
}


export default NewPost;