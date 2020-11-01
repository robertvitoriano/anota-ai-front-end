import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import api from "./../../services/api";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import CreateCategoryModal from "../../components/Modals/CreateCategoryModal";
import "./index.css";

function Categories({ match }) {
  const [categories, setCategories] = useState([]);
  const [showCreationModal, setShowCreationModal] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get(
        "/" + match.params.userId + "/categories",
        {
          headers: {
            userauth: localStorage.getItem("Authorization"),
          },
        }
      );
      setCategories(response.data);
    }
    loadCategories();
  }, []);

  const handleCategoryCreation = async (name, id) => {
    const response = await api.post(
      "/" + match.params.userId + "/categories",
      {
        name: name,

        id: id,
      },
      {
        headers: {
          userauth: localStorage.getItem("Authorization"),
        },
      }
    );
    setShowCreationModal(false);

    const newCategory = response.data;
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="categories-container">
      <Header match={match}></Header>
      <div className="categories-content">
        <div className=" categories-buttons categories-buttons-left">
          <a
            className="header-button categories-button"
            onClick={() => setShowCreationModal(true)}
          >
            Criar
          </a>
          <a className="header-button categories-button">Deletar</a>
          <a className="header-button categories-button"></a>
        </div>
        <div className="categories-scroll-list">
          <ul>
            <div className="categories-list">
              {categories.map((category) => (
                <Link to={`${category._id}`}>
                <li key={category._id}>
                  {category.name}
                </li>
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <div className=" categories-buttons categories-buttons-right">
          <a className="header-button categories-button"></a>
          <a className="header-button categories-button"></a>
          <a className="header-button categories-button"></a>
        </div>
      </div>
      <Footer></Footer>
      {showCreationModal ? (
        <CreateCategoryModal onCreate={handleCategoryCreation} match={match} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Categories;
