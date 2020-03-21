import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from 'react-redux';
import store from './store';
import {loadAllFilms, loadPromoFilm} from './actions/action-creators/films/films';
import {checkAuth} from './actions/action-creators/user/user';

store.dispatch(checkAuth());
store.dispatch(loadAllFilms());
store.dispatch(loadPromoFilm());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
