import React, { useEffect, useState } from "react";
import api from './../../services/api'

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import "./index.css";
function Categories({ match }) {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
      async function loadCategories(){
          const response = await api.get("/" + match.params.userId + "/categories",
            {
              headers: {
                userauth: localStorage.getItem("Authorization"),
              },
            }
          );
          setCategories(response.data);
          console.log(response);
      }
      loadCategories()
 
  })
  console.log(categories)

  return (
    <div className="categories-container">
      <Header match={match}></Header>
      <div className="categories-content">
        <div className="categories-scroll-list">
          <ul>
            <div className="categories-list">
              {categories.map((category) => (
                <li>{category.name}</li>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Categories;
