import React from 'react';
import renderer from 'react-test-renderer';
import {filmReviews} from '../../mocks/films-test';
import MovieReviews from './movie-reviews.jsx';

it(`<MovieReview /> component renders correctly`, () => {
  const tree = renderer
    .create(<MovieReviews
      filmReviews={filmReviews}
    />);

  expect(tree).toMatchSnapshot();
});
