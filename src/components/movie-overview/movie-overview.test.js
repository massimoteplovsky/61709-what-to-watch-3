import React from "react";
import renderer from "react-test-renderer";
import {film} from "../../mocks/films-test";
import MovieOverview from "./movie-overview.jsx";

it(`<MovieOverview /> component renders correctly`, () => {
  const tree = renderer
    .create(<MovieOverview
      filmInfo={film}
    />);

  expect(tree).toMatchSnapshot();
});
