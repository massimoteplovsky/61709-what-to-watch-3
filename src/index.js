import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from 'react-redux';
import store from './store';

const promoFilmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilmInfo={promoFilmInfo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
