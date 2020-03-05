import {
  CHANGE_FILM_GENRE,
  INCREMENT_FILM_COUNTER,
  LOAD_ALL_FILMS,
  LOAD_PROMO_FILM,
  LOAD_FILM_REVIEWS
} from '../../actions/types/films/films';
import {FILM_TO_SHOW} from '../../consts';

const initialState = {
  films: [],
  filteredFilms: [],
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
          {
            films: payload,
            filteredFilms: payload
          }
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
    default:
      return state;
  }
};
