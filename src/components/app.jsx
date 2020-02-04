import React from "react";
import Main from "./main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({filmData}) => {
  return (
    <Main filmData={filmData}/>
  );
};

export default App;
