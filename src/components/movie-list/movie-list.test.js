import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../mocks/films-test.js";
import MovieList from "./movie-list.jsx";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import history from "../../history.js";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([]);
let store = mockStore({
  films: {
    films
  }
});

it(`<MovieList /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieList
              films={films}
              message={``}
            />
          </Router>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<MovieList /> component renders correctly with empty films array`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MovieList
            films={[]}
            message={``}
          />
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});
