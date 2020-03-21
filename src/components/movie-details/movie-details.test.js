import React from "react";
import renderer from "react-test-renderer";
import {film} from "../../mocks/films-test";
import MovieDetails from "./movie-details.jsx";

it(`<MovieDetails /> component renders correctly`, () => {
  const tree = renderer
    .create(<MovieDetails
      filmInfo={film}
    />);

  expect(tree).toMatchSnapshot();
});
