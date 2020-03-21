import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films} from "../../mocks/films-test";
import {NO_AUTH} from "../../consts.js";

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
  application: {
    error: false
  },
  user: {
    authorizationStatus: NO_AUTH,
    userInfo: null,
  }
});

it(`<App /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            error={false}
            authorizationStatus={NO_AUTH}
            onChangeLoadingStatus={() => {}}
            onLoadData={() => Promise.resolve()}
            loading={false}
            match={{}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<App /> component with error status is true renders error`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            error={true}
            authorizationStatus={NO_AUTH}
            onChangeLoadingStatus={() => {}}
            onLoadData={() => Promise.resolve()}
            loading={false}
            match={{}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();
  expect(tree).toMatchSnapshot();
});


