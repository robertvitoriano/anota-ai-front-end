import React, { useState } from "react";
import Footer from "./../../components/Footer";
// import { Link } from 'react-router-dom';
import api from "../../services/api";

import "./login.css";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/users/login", {
      email: email,
      password: password,
    });
    if (response.status !== 201) {
      alert("unable o login");
    } else {
      // response será o user encontrado no banco de dados
      const { token, user } = response.data;
      localStorage.setItem("Authorization", token);
      localStorage.setItem("userId", user._id);

      history.push(`/user/${user._id}`);
    }
  }
  function handleSignUpButton(event) {
    event.preventDefault();
    history.push(`/user/signup`);
  }

  return (
    <div className="login-container">
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
        </form>
      </div>
      <h2 className="signup-message">
        Ainda não é cadastrado ? Clique no botão abaixo e junte-sea nós!
      </h2>
      <button
        type="button"
        onClick={(e) =>handleSignUpButton(e)}
        className="signup-button button"
      >
        Sign Up
      </button>

      <Footer></Footer>
    </div>
  );
};

export default Login;
