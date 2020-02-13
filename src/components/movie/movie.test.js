import React from 'react';
import renderer from 'react-test-renderer';
import {film} from '../../mocks/films-test';
import Movie from './movie.jsx';

it(`<Movie /> component renders correctly`, () => {
  const tree = renderer
    .create(<Movie
      filmInfo={film}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
