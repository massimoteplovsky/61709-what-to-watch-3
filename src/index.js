import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from 'react-redux';
import store from './store';

const promoFilmInfo = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  poster: ``,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilmInfo={promoFilmInfo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
