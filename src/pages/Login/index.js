/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Footer from "./../../components/Footer";
import Loading from './../../components/Loading'
import api from "../../services/api";
import RecoverPasswordModal from "../../components/Modals/RecoverPasswordModal";
import "./login.css";
import Swal from 'sweetalert2'
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayRecoverPasswordModal, setRecoverPasswordModal] = useState(false)



  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true)

    try {

      const response = await api.post("/users/login", {
        email: email,
        password: password,
      });
      const { token, user } = response.data;
      localStorage.setItem("Authorization", token);
      localStorage.setItem("userId", user._id);
      setIsLoading(false)
      history.push(`/user/${user._id}`);

    } catch (e) {
      setIsLoading(false)
      Swal.fire("Algo deu errado", e.message, "error");
    }

  }
  function handleSignUpButton(event) {
    event.preventDefault();
    history.push(`/user/signup`);
  }

  const handleRecoverEmail = async(event)=>{
    event.preventDefault();
    console.log('Has been clicked')
    try{
      await api.post("/email/recover", {
        email: email,
      });
      
    }catch(error){
      console.error(error)
      Swal.fire("Algo deu errado", error.message, "error");
    }
  }

  return (
    <div className="login-container" onClick={() => {
      setIsLoading(false)
    }}>
      {isLoading ? (<Loading show={isLoading} />) : ''}
      {displayRecoverPasswordModal?<RecoverPasswordModal  setDisplayModal={setRecoverPasswordModal}  onSubmit={handleRecoverEmail} email={email} setEmail={setEmail}/>:''}
      <h1 className="welcome-message">Seja Bem-vindo(a)</h1>
      <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="email-input"
            placeholder="Digite seu email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="password-input"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" className="login-button button">
            Login
          </button>
          <a className="password-recover-link" onClick={() => setRecoverPasswordModal(true)}>Esqueceu a senha ? a gente te ajuda !</a>
        </form>
      </div>
      <h2 className="signup-message">
        Ainda não é cadastrado ? Clique no botão abaixo e junte-sea nós!
      </h2>
      <button
        type="button"
        onClick={(e) => handleSignUpButton(e)}
        className="signup-button button"
      >
        Sign Up
      </button>

      <Footer></Footer>
    </div>
  );
};

export default Login;
