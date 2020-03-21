import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../mocks/films-test.js";
import {MyList} from "./my-list.jsx";
import {AUTH} from "../../consts.js";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history.js";

const mockStore = configureMockStore([]);
let store = mockStore({
  films: {
    films
  },
  user: {
    authorizationStatus: AUTH
  }
});

it(`<MyList /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MyList
              favoriteFilms={films}
            />
          </Router>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});
