import React from 'react';
import renderer from 'react-test-renderer';
import {films, promoFilmInfo} from '../../mocks/films-test';
import Main from './main.jsx';

const handleTitleClick = () => {};

it(`<Main /> component renders correctly`, () => {
  const tree = renderer
    .create(<Main
      promoFilmInfo={promoFilmInfo}
      films={films}
      filteredFilms = {films}
      actualGenre = {``}
      onChangeFilmGenre = {() => {}}
      onTitleClick={handleTitleClick}
    />, {
      createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});
