import React from 'react';
import renderer from 'react-test-renderer';
import {film, films, filmReviews} from '../../mocks/films-test';
import {Movie} from './movie.jsx';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);

let store = mockStore({
  films: {
    filteredFilms: films,
    films,
    promoFilm: null,
    filmCounter: 8,
    actualGenre: ``,
    reviews: []
  },
  application: {
    error: false
  },
  user: {
    authorizationStatus: `NO_AUTH`,
    userInfo: null
  }
});

it(`<Movie /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Movie
            filmInfo={film}
            films={films}
            onTitleClick={() => {}}
            activeItemIndex={0}
            onChangeActiveItemIndex={() => {}}
            filmReviews={filmReviews}
            filmID={1}
            onLoadFilmReviews={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});


