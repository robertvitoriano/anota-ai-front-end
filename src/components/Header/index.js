import React from 'react';
import './index.css'
import {useHistory} from 'react-router-dom';
import api from './../../services/api'
function Header ({match}){
    const history = useHistory()
    async function handleCreation() {
        history.push(`/${match.params.userId}/creation`);
    }
    async function handleLogout() {
        try{
            await api.post('/users/logout', {
                headers: {
                    userauth: localStorage.getItem("Authorization"),
                },
            })

        }catch(e){
            console.log(e);

        }
        localStorage.removeItem("Authorization")
        history.push(`/`);
    }
    
    return(
        <div className="header-container">
            
            <div className="header-content">
                
            <button onClick={handleCreation} className="creation-button">Criar Anotação</button>
                <a onClick={handleLogout} className="logout-button">LOGOUT</a>
            </div>
        </div>
    )

}
export default Header;