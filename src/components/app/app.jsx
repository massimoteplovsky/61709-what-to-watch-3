import React from "react";
import Main from "../main/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({filmInfo, filmTitles}) => {
  return (
    <Main
      filmInfo={filmInfo}
      filmTitles={filmTitles}
    />
  );
};

export default App;
