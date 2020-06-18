import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import './index.css'
import api from '../../services/api'
const Home =  ({match})=>{
 const [posts,setPosts] = useState([]);

let history = useHistory();

  
    useEffect(() => {
        async function loadPosts() {
            const response = await api.get('/posts', {
                headers: {
                    user: match.params.userId,
                },

            })
            setPosts(response.data);
           
        }
        loadPosts();
    }, [match.params.userId])

    async function handleCreation(event){
        event.preventDefault();

        history.push(`/${match.params.userId}/creation`)

    }



    return (<div className="container" >
           <button onClick={handleCreation}>Criar Post</button>

        {posts.length > 0 ? (
            <ul>
                {posts.map((post) =>
                    <li key={post._id} className="post-container">
                        <div className="post-title">
                            <h2>{post.title}</h2>
                            </div>
                    
                    <div className="post-body">
                    <p>{post.body}</p>
                        </div>
                    </li>

                )}
            </ul>

        )  : <h1>Nada postado</h1>}



    </div>)
}


export default Home;