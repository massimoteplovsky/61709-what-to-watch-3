import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../mocks/films-test";
import MovieList from "./movie-list.jsx";
import {Router} from "react-router-dom";
import history from "../../history";

it(`<MovieList /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MovieList
            films={films}
          />
        </Router>
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
            films={films}
          />
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});
