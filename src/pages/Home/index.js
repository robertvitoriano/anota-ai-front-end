import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom'
import './index.css'
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

        history.push(`/${match.params.userId}/creation`);

    }



    return (<div className="container" >
           <button onClick={handleCreation}>Criar Anotação</button>

        {notes.length > 0 ? (
            <ul>
                {notes.map((note) =>
                    <li key={note._id} className="note-container">
                        <div className="post-title">
                            <h2>{note.title}</h2>
                            </div>
                    
                    <div className="note-body">
                    <p>{note.body}</p>
                        </div>
                    </li>

                )}
            </ul>

        )  : <h1>Nenhuma anotação ainda</h1>}



    </div>)
}


export default Home;