import React from "react";
import {FilmPropType} from "../../prop-validator/prop-validator";
import Main from "../main/main.jsx";

const titleClickHandler = () => {};

const App = ({filmInfo, filmTitles}) => {
  return (
    <Main
      filmInfo={filmInfo}
      filmTitles={filmTitles}
      onTitleClick={titleClickHandler}
    />
  );
};

App.propTypes = {
  filmInfo: FilmPropType.INFO,
  filmTitles: FilmPropType.TITLE
};

export default App;
