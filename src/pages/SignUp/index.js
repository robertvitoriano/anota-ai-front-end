import React, { useState } from "react";
import Loading from "./../../components/Loading";
import Input from "../../components/Input";
import api from "../../services/api";
import Footer from "./../../components/Footer";
import Swal from "sweetalert2";

import "./sigin-in.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);

      await api.post("/users", { email });

      setIsLoading(false);

      Swal.fire(
        "Cadastro iniciado",
        `Em breve um e-mail será enviado para ${email}, confirme seu e-mail, finalize o cadastro e comece a criar !`,
        "success"
      ).then(() => history.push(`/`));
    } catch (e) {
      setIsLoading(false);
      console.error(e);
      Swal.fire("Algo deu errado", e.message, "error");
    }
  }

  return (
    <div className="sign-up-container" onClick={() => setIsLoading(false)}>
      {isLoading ? <Loading show={isLoading} /> : ""}
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Inicie seu cadastro e comece a criar</h1>
          <Input
            className="email-input"
            placeholder="Digite seu email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="sign-up-button">
            Iniciar Cadastro
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
