import React from 'react';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films-test';
import {GenreList} from './genre-list.jsx';

it(`<GenreList /> component renders correctly`, () => {
  const tree = renderer
    .create(<GenreList
      films={films}
      actualGenre={``}
      handleFilmGenreChange={() => {}}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
