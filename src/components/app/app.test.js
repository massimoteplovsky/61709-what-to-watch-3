import React from 'react';
import renderer from 'react-test-renderer';
import {promoFilmInfo} from '../../mocks/films-test';
import App from './app.jsx';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {films} from '../../mocks/films';

const mockStore = configureMockStore([]);
let store = mockStore({
  filteredFilms: [],
  films,
  filmCounter: 8,
  actualGenre: ``
});

it(`<App /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            promoFilmInfo={promoFilmInfo}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});


