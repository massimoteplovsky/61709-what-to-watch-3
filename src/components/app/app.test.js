import React from 'react';
import renderer from 'react-test-renderer';
import {films, promoFilmInfo} from '../../mocks/films-test';
import {App} from './app.jsx';

it(`<App /> component renders correctly`, () => {
  const tree = renderer
    .create(<App
      promoFilmInfo={promoFilmInfo}
      films={films}
      filteredFilms = {films}
      actualGenre = {``}
      onChangeFilmGenre = {() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});
