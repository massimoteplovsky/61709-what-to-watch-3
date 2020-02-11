import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const film = {
  id: 1,
  title: `Terminator 2. Judgment day`,
  poster: ``
};

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
