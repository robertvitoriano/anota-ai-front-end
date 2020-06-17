import React, { useState } from 'react'

import api from '../../services/api'

import './index.css'
const Login = ({history})=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    async function handleSubmit(event) {
        event.preventDefault()

        const response = await api.post('/users', {
            email: email,
            password:password
        })
        
       
        const { _id } = response.data

        history.push(`/user/${_id}`)
    }


    return(<div className="container">
            <h1>Seja Bem-vindo(a)</h1>
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <input className="email-input" 
                placeholder="Digite seu email" 
                name="email"
                 value={email}
                 onChange={e=> setEmail(e.target.value)}
                 ></input>
                <input className="password-input" 
                type="password"
                 placeholder="Digite sua senha" 
                 name="password" 
                 value={password}
                 onChange={e=>setPassword(e.target.value)}
                 ></input>
                <button type="submit">Login</button>
            </form>
            </div>
    </div>)
}



export default Login;