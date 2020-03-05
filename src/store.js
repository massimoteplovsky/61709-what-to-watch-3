import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';
import {createAPI} from './api';
import {requestFail} from './actions/action-creators/application/application';

const onRequestFail = () => {
  store.dispatch(requestFail());
};

const api = createAPI(onRequestFail);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export default store;

