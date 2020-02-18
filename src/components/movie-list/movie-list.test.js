import React from 'react';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films-test';
import MovieList from './movie-list.jsx';

const handleTitleClick = () => {};

it(`<MovieList /> component renders correctly`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
      onTitleClick={handleTitleClick}
    />, {
      createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<MovieList /> component renders correctly with empty films array`, () => {
  const tree = renderer
    .create(<MovieList
      films={[]}
      onTitleClick={handleTitleClick}
    />, {
      createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});
