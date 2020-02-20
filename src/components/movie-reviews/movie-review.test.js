import React from 'react';
import renderer from 'react-test-renderer';
import {film} from '../../mocks/films-test';
import MovieReviews from './movie-reviews.jsx';

it(`<MovieReview /> component renders correctly`, () => {
  const tree = renderer
    .create(<MovieReviews
      filmInfo={film}
    />);

  expect(tree).toMatchSnapshot();
});
