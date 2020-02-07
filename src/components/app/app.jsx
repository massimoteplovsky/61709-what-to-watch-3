import React from "react";
import {filmTypes} from "../../prop-validator/prop-validator";
import Main from "../main/main.jsx";

const App = ({filmInfo, filmTitles}) => {
  return (
    <Main
      filmInfo={filmInfo}
      filmTitles={filmTitles}
    />
  );
};

App.propTypes = {
  filmInfo: filmTypes.info,
  filmTitles: filmTypes.titles
};

export default App;
