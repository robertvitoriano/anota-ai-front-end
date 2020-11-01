import React from "react";
import { Wrapper } from "./styled";
import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
function Category({match}) {
  return (
    <>
      <Header match={match} />
      <Wrapper imgUrl></Wrapper>
      <Footer />
    </>
  );
}

export default Category;
