import React from 'react';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films-test';
import {GenreList} from './genre-list.jsx';

it(`<GenreList /> component renders correctly`, () => {
  const tree = renderer
    .create(<GenreList
      films={films}
      handleFilmGenreChange={() => {}}
      filteredFilms={films}
      filmCounter={8}
      onChangeActiveItemIndex={() => {}}
      activeItemIndex={0}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
