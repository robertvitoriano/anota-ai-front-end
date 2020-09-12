import React, { useState, useEffect } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import api from "./../../services/api";

function Header({ match }) {
  const history = useHistory();
  const [showDropdownMenu, setShowDropDownMenu] = useState(false);
  const [createdCategories, setCreatedCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
  const [showTranslucent, setShowTranslucent] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get(`/${match.params.userId}/categories`, {
        headers: {
          userauth: localStorage.getItem("Authorization"),
        },
      });
      setCreatedCategories(response.data);
    }
    loadCategories();
  }, [showNewCategoryModal]);
  async function handleCreation() {
    history.push(`/${match.params.userId}/creation`);
  }

  async function handleHome() {
    history.push(`/user/${match.params.userId}`);
  }
  async function handleDropDown() {
    setShowDropDownMenu(!showDropdownMenu);
    console.log(showDropdownMenu);
  }

  async function showCategory(e) {
    e.preventDefault();
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
  async function handleCategoryCreation(e) {
    e.preventDefault();
    if (createdCategories.length < 8) {
      try {
        await api.post(
          "/" + match.params.userId + "/categories",
          {
            name: newCategory,
            authorId: match.params.userId,
          },
          {
            headers: {
              userauth: localStorage.getItem("Authorization"),
            },
          }
        );
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Limite de categorias atingido");
    }

    setShowNewCategoryModal(false);
    setShowTranslucent(false);
    setNewCategory("");
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
