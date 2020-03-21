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
    favoriteFilms: films,
    films,
    promoFilm: null,
    filmCounter: 8,
    actualGenre: ``,
    reviews: []
  },
  user: {
    authorizationStatus: `NO_AUTH`,
    userInfo: null
  }
});

it(`<Main /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              filteredFilms={films}
              promoFilm={film}
              onChangeFilmGenre={() => {}}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});

