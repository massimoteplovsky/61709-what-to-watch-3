import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route.jsx";
import {AUTH} from "../../consts.js";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history.js";

const mockStore = configureMockStore([]);
let store = mockStore({
  user: {
    authorizationStatus: AUTH
  }
});

it(`<PrivateRoute /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PrivateRoute
              authorizationStatus={AUTH}
              exact={true}
              path={`/`}
              render={() => {}}
              computedMatch={{params: {id: 1}}}
            />
          </Router>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});
