import React, { useEffect, useState } from "react";
import api from './../../services/api'

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import "./index.css";
function Categories({ match }) {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
      async function loadCategories(){
          const response = await api.get('/'+match.params.userId+'/categories',{
              headers:{
                  userauth:localStorage.getItem('AUTHORIZATION')
              }
          })
          setCategories(response.data);
      }
      loadCategories()

  },[match.params.userId])

  return (
    <div class="categories-container">
      <Header match={match}></Header>
      <div class="categories-content">
        <div className="categories-scroll-list">
          <ul>
            <div className="categories-list">
              {categories.map(() => (
                <li>Link 1</li>
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
