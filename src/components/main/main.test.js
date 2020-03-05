import React from 'react';
import renderer from 'react-test-renderer';
import {films, film} from '../../mocks/films-test';
import {Main} from './main.jsx';
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
  }
});

const handleTitleClick = () => {};

it(`<Main /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            films={films}
            promoFilm={film}
            onTitleClick={handleTitleClick}
            activeItemIndex={0}
            onChangeActiveItemIndex={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});

