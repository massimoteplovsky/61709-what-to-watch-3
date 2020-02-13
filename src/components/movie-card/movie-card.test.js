import React from 'react';
import renderer from 'react-test-renderer';
import {film} from '../../mocks/films-test';
import MovieCard from './movie-card.jsx';

const handleTitleClick = () => {};
const handleMouseEnter = () => {};

it(`<MovieCard /> component renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      film={film}
      onTitleClick={handleTitleClick}
      onMouseEnter={handleMouseEnter}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
