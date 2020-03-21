import React from "react";
import renderer from "react-test-renderer";
import {MoviePromo} from "./movie-promo.jsx";
import {film} from "../../mocks/films-test";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AUTH} from "../../consts.js";

it(`<MoviePromo /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MoviePromo
            filmInfo={film}
            onToggleIsFavoriteFilm={() => {}}
            authorizationStatus={AUTH}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});
