import React from 'react';
import renderer from 'react-test-renderer';
import {film, films} from '../../mocks/films-test';
import Movie from './movie.jsx';

const handleTitleClick = () => {};

it(`<Movie /> component renders correctly`, () => {
  const tree = renderer
    .create(<Movie
      filmInfo={film}
      films={films}
      onTitleClick={handleTitleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
