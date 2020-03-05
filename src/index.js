import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from 'react-redux';
import store from './store';
import {loadAllFilms, loadPromoFilm} from './actions/action-creators/films/films';

store.dispatch(loadAllFilms());
store.dispatch(loadPromoFilm());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
