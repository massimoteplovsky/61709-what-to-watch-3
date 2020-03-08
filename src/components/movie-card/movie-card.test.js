import React from "react";
import renderer from "react-test-renderer";
import {film} from "../../mocks/films-test";
import {Router} from "react-router-dom";
import history from "../../history";
import MovieCard from "./movie-card.jsx";

it(`<MovieCard /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MovieCard
            film={film}
            isPlaying={false}
            onRunModeToggle={() => {}}
          >
            <video/>
          </MovieCard>
        </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
