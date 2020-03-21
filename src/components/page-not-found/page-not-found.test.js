import React from "react";
import renderer from "react-test-renderer";
import {PageNotFound} from "./page-not-found.jsx";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import history from "../../history.js";
import configureMockStore from "redux-mock-store";
import {AUTH} from "../../consts.js";

const mockStore = configureMockStore([]);
let store = mockStore({
  user: {
    authorizationStatus: AUTH
  }
});

it(`<PageNotFound /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PageNotFound/>
          </Router>
        </Provider>
    );

  expect(tree).toMatchSnapshot();
});
