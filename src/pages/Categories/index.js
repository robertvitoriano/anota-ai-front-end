import React from "react";

import Header from './../../components/Header';
import Footer from './../../components/Footer';
import './index.css'
function Categories({match}) {

  return (
    <div class="categories-container">
      <Header match={match}></Header>
      <div class="categories-content">
        <div className="categories-scroll-list">
          <ul>
            <div className="categories-list">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
              <li>Link 6</li>
              <li>Link 7</li>
              <li>Link 8</li>
              <li>Link 9</li>
              <li>Link 10</li>
              <li>Link 11</li>
              <li>Link 13</li>
              <li>Link 13</li>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
              <li>Link 6</li>
              <li>Link 7</li>
              <li>Link 8</li>
              <li>Link 9</li>
              <li>Link 10</li>
              <li>Link 11</li>
              <li>Link 13</li>
              <li>Link 13</li>
            </div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Categories;
