import React from 'react';
import renderer from 'react-test-renderer';
import {films, promoFilmInfo} from '../../mocks/films-test';
import {Main} from './main.jsx';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);
let store = mockStore({
  filteredFilms: [],
  films,
  filmCounter: 8,
  actualGenre: ``
});

const handleTitleClick = () => {};

it(`<Main /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            promoFilmInfo={promoFilmInfo}
            filteredFilms = {films}
            onTitleClick={handleTitleClick}
            filmCounter={8}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});

