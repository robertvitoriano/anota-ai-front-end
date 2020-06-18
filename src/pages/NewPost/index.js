import React,{useState,useEffect} from 'react'
import './index.css'
import api from '../../services/api.js'

const NewPost=({match})=>{
     const[body,setBody] = useState();
    const [title, setTitle] = useState();


    useEffect(() => {
       async function setHeaders(){

      await  api.post('/posts',{
            headers:{
                user:match.params.userId
            }
        })
       }
       setHeaders();
        return () => {
            
        }
    }, [match.params.userId])

     async function handleSubmit(event){
         event.preventDefault();
         await api.post('/posts',{
             title,
             body

         })

         console.log(match.params.userId);
     }
    return(<div className="container">
        <h1>Escreva seu post abaixo</h1>
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