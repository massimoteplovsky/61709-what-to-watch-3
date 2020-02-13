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
      onTitleClick={handleTitleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
