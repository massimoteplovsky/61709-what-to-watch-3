import React from 'react';
import renderer from 'react-test-renderer';
import {film} from '../../mocks/films-test';
import MovieCard from './movie-card.jsx';

const handleFunc = () => {};

it(`<MovieCard /> component renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      film={film}
      isPlaying={false}
      onTitleClick={handleFunc}
      onMouseEnter={handleFunc}
      onMouseLeave={handleFunc}
    />, {
      createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});
