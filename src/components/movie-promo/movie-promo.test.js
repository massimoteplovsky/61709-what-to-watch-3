import React from 'react';
import renderer from 'react-test-renderer';
import MoviePromo from './movie-promo.jsx';
import {film} from '../../mocks/films-test';

it(`<MoviePromo /> component renders correctly`, () => {
  const tree = renderer
    .create(<MoviePromo
      filmInfo={film}
      onChangeActiveItemIndex={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});
