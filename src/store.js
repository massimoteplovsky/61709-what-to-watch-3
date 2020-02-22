import {createStore} from 'redux';
import {filmsReducer} from './reducers/films-reducer/films-reducer';

const store = createStore(
    filmsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

export default store;

