import React from 'react';
import renderer from 'react-test-renderer';
import {film, films, filmReviews} from '../../mocks/films-test';
import {Movie} from './movie.jsx';

it(`<Movie /> component renders correctly`, () => {
  const tree = renderer
    .create(<Movie
      filmInfo={film}
      films={films}
      onTitleClick={() => {}}
      activeItemIndex={0}
      onChangeActiveItemIndex={() => {}}
      filmReviews={filmReviews}
      filmID={1}
      onLoadFilmReviews={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
