import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {films} from '../../mocks/films-test';

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
    userInfo: null,
    favorites: []
  }
});

it(`<App /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            films={films}
            error={false}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<App /> component renders error`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            films={films}
            error={true}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});


