import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';
import {createAPI} from './api';
import {requestFail} from './actions/action-creators/application/application';
import {requireAuthorization} from './actions/action-creators/user/user';
import {NO_AUTH} from './consts';

const onUnauthorized = () => {
  store.dispatch(requireAuthorization(NO_AUTH));
};

const onRequestFail = () => {
  store.dispatch(requestFail());
};

const api = createAPI(onRequestFail, onUnauthorized);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export default store;

