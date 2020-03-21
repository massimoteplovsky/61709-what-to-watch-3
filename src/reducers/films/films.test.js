import {film, films as filmsList, filmReviews} from "../../mocks/films-test";
import {films} from "./films.js";

import {
  CHANGE_FILM_GENRE,
  INCREMENT_FILM_COUNTER,
  LOAD_ALL_FILMS,
  LOAD_PROMO_FILM,
  LOAD_FILM_REVIEWS,
  CHANGE_FAVORITE_STATUS,
  ADD_REVIEW,
  LOAD_FAVORITES_FILMS,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES
} from "../../actions/types/films/films";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(films(void 0, {})).toEqual({
    films: [],
    favoriteFilms: [],
    promoFilm: null,
    actualGenre: `All genres`,
    filmCounter: 8,
    reviews: []
  });
});

it(`Reducer should change actual genre and film counter for recieved values`, () => {
  expect(films({
    films: [],
    favoriteFilms: [],
    actualGenre: `All genres`,
    filmCounter: 16,
    promoFilm: null,
    reviews: []
  }, {
    type: CHANGE_FILM_GENRE,
    payload: `Drama`,
  })).toEqual({
    films: [],
    favoriteFilms: [],
    actualGenre: `Drama`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  });
});

it(`Reducer should change film to show counter`, () => {
  expect(films({
    films: [],
    favoriteFilms: [],
    actualGenre: `Drama`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  }, {
    type: INCREMENT_FILM_COUNTER,
    payload: null,
  })).toEqual({
    films: [],
    favoriteFilms: [],
    actualGenre: `Drama`,
    filmCounter: 16,
    promoFilm: null,
    reviews: []
  });
});

it(`Reducer should load all films`, () => {
  expect(films({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  }, {
    type: LOAD_ALL_FILMS,
    payload: filmsList,
  })).toEqual({
    films: filmsList,
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  });
});

it(`Reducer should load promo film`, () => {
  expect(films({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  }, {
    type: LOAD_PROMO_FILM,
    payload: film,
  })).toEqual({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  });
});

it(`Reducer should load film reviews`, () => {
  expect(films({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: []
  }, {
    type: LOAD_FILM_REVIEWS,
    payload: filmReviews,
  })).toEqual({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: null,
    reviews: filmReviews
  });
});

it(`Reducer should change favorite field`, () => {
  expect(films({
    films: filmsList,
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  }, {
    type: CHANGE_FAVORITE_STATUS,
    payload: Object.assign({}, film, film[`isFavorite`] = true),
  })).toEqual({
    films: filmsList,
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  });
});

it(`Reducer should add review to store`, () => {
  expect(films({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  }, {
    type: ADD_REVIEW,
    payload: filmReviews
  })).toEqual({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: filmReviews
  });
});

it(`Reducer should load all user's favorite films in store`, () => {
  expect(films({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  }, {
    type: LOAD_FAVORITES_FILMS,
    payload: filmsList
  })).toEqual({
    films: [],
    favoriteFilms: filmsList,
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  });
});

it(`Reducer should add favorite film to list in store`, () => {
  expect(films({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  }, {
    type: ADD_TO_FAVORITES,
    payload: film
  })).toEqual({
    films: [],
    favoriteFilms: [film],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  });
});

it(`Reducer should load all user's favorite films in store`, () => {
  expect(films({
    films: [],
    favoriteFilms: [film],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  }, {
    type: DELETE_FROM_FAVORITES,
    payload: 1
  })).toEqual({
    films: [],
    favoriteFilms: [],
    actualGenre: `All Genres`,
    filmCounter: 8,
    promoFilm: film,
    reviews: []
  });
});


