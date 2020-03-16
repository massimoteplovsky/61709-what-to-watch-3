import {
  CHANGE_FILM_GENRE,
  INCREMENT_FILM_COUNTER,
  LOAD_ALL_FILMS,
  LOAD_PROMO_FILM,
  LOAD_FILM_REVIEWS,
  CHANGE_FAVORITE_STATUS,
  ADD_REVIEW
} from '../../actions/types/films/films';
import {FILM_TO_SHOW} from '../../consts';

const initialState = {
  films: [],
  actualGenre: `All genres`,
  filmCounter: FILM_TO_SHOW,
  promoFilm: null,
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
          {reviews: [...state.reviews, ...payload]}
      );
    default:
      return state;
  }
};
