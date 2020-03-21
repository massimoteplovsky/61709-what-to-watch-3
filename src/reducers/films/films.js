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
} from "../../actions/types/films/films.js";
import {FILM_TO_SHOW} from "../../consts.js";

const initialState = {
  films: [],
  favoriteFilms: [],
  promoFilm: null,
  actualGenre: `All genres`,
  filmCounter: FILM_TO_SHOW,
  reviews: []
};

export const films = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOAD_ALL_FILMS:
      return Object.assign(
          {},
          state,
          {films: payload}
      );
    case LOAD_PROMO_FILM:
      return Object.assign(
          {},
          state,
          {promoFilm: payload}
      );
    case LOAD_FILM_REVIEWS:
      return Object.assign(
          {},
          state,
          {reviews: payload}
      );
    case CHANGE_FILM_GENRE:
      return Object.assign(
          {},
          state,
          {
            actualGenre: payload,
            filmCounter: FILM_TO_SHOW
          }
      );
    case INCREMENT_FILM_COUNTER:
      return Object.assign(
          {},
          state,
          {filmCounter: state.filmCounter + FILM_TO_SHOW}
      );
    case CHANGE_FAVORITE_STATUS:
      const filmIndex = state.films.findIndex((film) => film.id === payload.id);
      return Object.assign(
          {},
          state,
          {
            films: [
              ...state.films.slice(0, filmIndex),
              payload,
              ...state.films.slice(filmIndex + 1)],
            promoFilm: state.promoFilm.id === payload.id ? payload : state.promoFilm
          }
      );
    case ADD_REVIEW:
      return Object.assign(
          {},
          state,
          {reviews: [...payload]}
      );
    case ADD_TO_FAVORITES:
      return Object.assign(
          {},
          state,
          {favoriteFilms: [...state.favoriteFilms, payload]}
      );
    case DELETE_FROM_FAVORITES:
      const favoriteFilms = state.favoriteFilms.filter((film) => film.id !== payload);
      return Object.assign(
          {},
          state,
          {favoriteFilms}
      );
    case LOAD_FAVORITES_FILMS:
      return Object.assign(
          {},
          state,
          {favoriteFilms: payload}
      );
    default:
      return state;
  }
};
