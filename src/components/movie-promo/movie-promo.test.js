import React from 'react';
import renderer from 'react-test-renderer';
import MoviePromo from './movie-promo.jsx';

it(`<MoviePromo /> component renders correctly`, () => {
  const tree = renderer
    .create(<MoviePromo
      id={1}
      title={``}
      genre={``}
      year={2014}
      onChangeActiveItemIndex={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});
