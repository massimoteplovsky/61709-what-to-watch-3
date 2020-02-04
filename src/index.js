import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const filmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App filmData={filmData}/>,
    document.querySelector(`#root`)
);
