import React,{useEffect,useState} from 'react';
import './index.css'
import api from '../../services/api'
const Home =  ({match})=>{
 const [posts,setPosts] = useState([]);


  
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



    return (<div className="container" >
           <button>No post</button>

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