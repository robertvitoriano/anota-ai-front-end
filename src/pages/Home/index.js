import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom'
import './home.css'
import api from '../../services/api'
const Home =  ({match})=>{
 const [notes,setNotes] = useState([]);

let history = useHistory();
  
    useEffect(() => {
        async function loadNotes() {
            const response = await api.get('/notes', {
                headers: {
                    userauth: localStorage.getItem("Authorization"),
                },
            })
            setNotes(response.data);
           
        }
        loadNotes();
    }, [match.params.userId])

    async function handleCreation(){
        history.push(`/${match.params.userId}/creation`,);

    }
    async function handleUpdate(id){
        localStorage.setItem("userId", match.params.userId)
        history.push(`/${id}/update`);


    }



    return (<div className="container" >
 
           <button onClick={handleCreation} className="creation-button">Criar Anotação</button>
    

        {notes.length > 0 ? (
            <ul className="notes-list">
                {notes.map((note) =>
                    <a key={note._id} onClick={()=>{handleUpdate(note._id)}}  href="#">
                    <li className="note-container">
                        <div className="post-title">
                            <h2>{note.title}</h2>
                            </div>
                            <div className="note-body-list">
                    <p>{note.body}</p>
                        </div>
                    </li>
                    </a>

                )}
            </ul>

        )  : <h1>Nenhuma anotação ainda</h1>}



    </div>)
}


export default Home;