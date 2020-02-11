import React from "react";
import {FilmPropType} from "../../prop-validator/prop-validator";
import Main from "../main/main.jsx";

const handleTitleClick = () => {};

const App = ({promoFilmInfo, films}) => {
  return (
    <Main
      promoFilmInfo={promoFilmInfo}
      films={films}
      onTitleClick={handleTitleClick}
    />
  );
};

App.propTypes = {
  promoFilmInfo: FilmPropType.PROMO_FILM_INFO,
  films: FilmPropType.FILMS
};

export default App;
