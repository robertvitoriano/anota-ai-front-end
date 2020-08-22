import React, { useState } from 'react'

import api from '../../services/api'

import './sigin-in.css'
const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
   


    async function handleSubmit(event) {
        event.preventDefault()

     const response =   await api.post('/users', {
            email: email,
            password: password,
            name:name,
            username:username
        })
        console.log(response.data);

      await api.post('/users/login', {
            email: email,
            password: password,

        },{
            headers:{
                userauth: response.data.token
            }
        })
    

        history.push(`/user/${response.data.user._id}`);
    }


    return (<div className="sign-up-container">
        <h1>Faça seu cadastro e comece a criar</h1>
        <div className="form-container">
            <input className="name-input"
                placeholder="Digite seu nome"
                name="password"
                value={name}
                onChange={e => setName(e.target.value)}
            ></input>
            <form className="login-form" onSubmit={handleSubmit}>
                <input className="email-input"
                    placeholder="Digite seu email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                ></input>
                <input className="username-input"
                    placeholder="Digite um apelido"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                ></input>

                <input className="password-input"
                    type="password"
                    placeholder="Digite sua senha"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                ></input>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </div>)
}



export default Login;