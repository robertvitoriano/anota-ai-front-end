import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import api from "./../../services/api";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import CreateCategoryModal from "../../components/Modals/CreateCategoryModal";
import Loading from './../../components/Loading'
import "./index.css";

function Categories({ match }) {
  const [categories, setCategories] = useState([]);
  const [showCreationModal, setShowCreationModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      setIsLoading(true)
      const response = await api.get(
        "/" + match.params.userId + "/categories",
        {
          headers: {
            userauth: localStorage.getItem("Authorization"),
          },
        }
      );
      setCategories(response.data);

      setIsLoading(false)
    }
    loadCategories();
  }, [match.params.userId]);

  const handleCategoryCreation = async (name, id) => {

    if(!name) return alert(" Insira o nome da nova categoria.");
     setIsLoading(true)
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
    setIsLoading(false)
    setShowCreationModal(false);
    const newCategory = response.data;
    setCategories([...categories, newCategory]);

  };

  return (
    <div className="categories-container" onClick={()=>{setIsLoading(false)}}>
      <Header match={match}></Header>
      {isLoading? <Loading show ={isLoading}/>:''}
      <div className="categories-content">
        <div className=" categories-buttons categories-buttons-left">
          <a
            className="header-button categories-button"
            onClick={() => setShowCreationModal(true)
            
            }
          >
            Criar
          </a>
          <a className="header-button categories-button" >Deletar</a>
        </div>
        <div className="categories-scroll-list">
          <ul>
            <div className="categories-list">
              {categories.map((category) => (
                <Link to={`/${match.params.userId}/${category._id}`} >
                <li key={category._id}>
                  {category.name}
                </li>
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <div className=" categories-buttons categories-buttons-right">

        </div>
      </div>
      <Footer></Footer>
      {showCreationModal ? (
        <CreateCategoryModal onCreate={handleCategoryCreation} match={match} onCancel={setShowCreationModal} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Categories;
