import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const filmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      filmInfo={filmInfo}
      filmTitles={filmTitles}
    />,
    document.querySelector(`#root`)
);
