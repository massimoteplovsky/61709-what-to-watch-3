import React from 'react';
import renderer from 'react-test-renderer';
import MoviePromo from './movie-promo.jsx';

it(`<MoviePromo /> component renders correctly`, () => {
  const tree = renderer
    .create(<MoviePromo
      title={``}
      genre={``}
      year={2014}
    />, {
      createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});
