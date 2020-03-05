import React from 'react';
import renderer from 'react-test-renderer';
import {ShowMore} from './show-more.jsx';
import {films} from '../../mocks/films-test';

it(`<ShowMore /> component renders correctly`, () => {
  const tree = renderer
    .create(<ShowMore
      filmCounter={8}
      handleFilmCounterIncrement={() => {}}
      filteredFilms={films}
    />);

  expect(tree).toMatchSnapshot();
});
