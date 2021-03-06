import {films as filmsList, film, filmReviews} from '../../mocks/films-test';
import {films} from './films.js';
import {
  changeFilmGenre,
  incrementFilmCounter,
  loadAllFilms,
  loadPromoFilm,
  loadFilmReviews
} from '../../actions/action-creators/films/films';
import {
  CHANGE_FILM_GENRE,
  INCREMENT_FILM_COUNTER,
  LOAD_ALL_FILMS,
  LOAD_PROMO_FILM,
  LOAD_FILM_REVIEWS
} from '../../actions/types/films/films';

import MockAdapter from "axios-mock-adapter";
import {createAPI} from '../../api';
const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(films(void 0, {})).toEqual({
    films: [],
    filteredFilms: [],
    actualGenre: `All genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  });
});

it(`Reducer should change actual genre for recieved value`, () => {
  expect(films({
    films: filmsList,
    filteredFilms: filmsList,
    actualGenre: `All genres`,
    filmCounter: 16,
    promoFilm: null,
    reviews: []
  }, {
    type: CHANGE_FILM_GENRE,
    payload: `Drama`,
  })).toEqual({
    films: filmsList,
    filteredFilms: filmsList,
    actualGenre: `Drama`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  });
});

it(`Reducer should change film to show counter`, () => {
  expect(films({
    films: filmsList,
    filteredFilms: filmsList,
    actualGenre: `Drama`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  }, {
    type: INCREMENT_FILM_COUNTER,
    payload: null,
  })).toEqual({
    films: filmsList,
    filteredFilms: filmsList,
    actualGenre: `Drama`,
    filmCounter: 16,
    promoFilm: null,
    reviews: []
  });
});

it(`Reducer should load all films`, () => {
  expect(films({
    films: [],
    filteredFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  }, {
    type: LOAD_ALL_FILMS,
    payload: filmsList,
  })).toEqual({
    films: filmsList,
    filteredFilms: filmsList,
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  });
});

it(`Reducer should load promo film`, () => {
  expect(films({
    films: [],
    filteredFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  }, {
    type: LOAD_PROMO_FILM,
    payload: film,
  })).toEqual({
    films: [],
    filteredFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  });
});

it(`Reducer should load film reviews`, () => {
  expect(films({
    films: [],
    filteredFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  }, {
    type: LOAD_FILM_REVIEWS,
    payload: filmReviews,
  })).toEqual({
    films: [],
    filteredFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: filmReviews
  });
});

describe(`Action creators work correctly`, () => {

  it(`Action creator for changing film genre returns correct action`, () => {
    expect(changeFilmGenre(`Drama`)).toEqual({
      type: CHANGE_FILM_GENRE,
      payload: `Drama`,
    });
  });

  it(`Action creator for changing film counter returns correct action`, () => {
    expect(incrementFilmCounter()).toEqual({
      type: INCREMENT_FILM_COUNTER,
      payload: null,
    });
  });

  it(`Action creator for loading films returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = loadAllFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_ALL_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for loading promo film returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_PROMO_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for loading film reviews returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmReviewsLoader = loadFilmReviews(film.id);

    apiMock
      .onGet(`/comments/${film.id}`)
      .reply(200, [{fake: true}]);

    return filmReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FILM_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });
});
