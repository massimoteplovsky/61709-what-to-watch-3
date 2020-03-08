import React from "react";
import renderer from "react-test-renderer";
import {films, film} from "../../mocks/films-test";
import {Main} from "./main.jsx";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history";
import configureMockStore from "redux-mock-store";

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

it(`<Main /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              films={films}
              promoFilm={film}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});

