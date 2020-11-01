import React, { useState, useEffect } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import api from "./../../services/api";

function Header({ match }) {
  const history = useHistory();

  async function handleCreation() {
    history.push(`/${match.params.userId}/creation`);
  }

  async function handleHome() {
    history.push(`/user/${match.params.userId}`);
  }

  async function handleLogout() {
    try {
      await api.post("/users/logout", {
        headers: {
          userauth: localStorage.getItem("Authorization"),
        },
      });
    } catch (e) {
      console.log(e);
    }
    localStorage.removeItem("Authorization");
    history.push(`/`);
  }

  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <a onClick={handleHome} className=" header-button">
            Home
          </a>
          <a
            onClick={e=>history.push(`/${match.params.userId}/categories`)}
            className=" header-button categories-button"
          >
            Categorias
          </a>

          <a onClick={handleCreation} className="header-button">
            Criar Anotação
          </a>
          <a onClick={handleLogout} className=" header-button">
            LOGOUT
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;
