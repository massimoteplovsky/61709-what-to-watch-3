import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";

const PageNotFound = () => {
  return (
    <div
      className="user-page"
    >
      <Header additionalClass="user-page__head"/>
      <h1
        className="title"
        style={{
          margin: `150px 0`,
          textAlign: `center`,
          fontSize: `60px`
        }}
      >Sorry, this page not found</h1>
      <Footer/>
    </div>
  );
};

export default PageNotFound;
