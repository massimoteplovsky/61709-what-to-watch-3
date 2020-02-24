import {films} from '../../mocks/films';
import {
  CHANGE_FILM_GENRE,
  GET_FILMS_BY_GENRE,
  CHANGE_FILM_COUNTER
} from '../../actions/types/film-action-types';
import {FILM_TO_SHOW} from '../../consts';

const initialState = {
  films,
  filteredFilms: films,
  actualGenre: `All genres`,
  filmCounter: FILM_TO_SHOW
};

export const filmsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CHANGE_FILM_GENRE:
      return Object.assign(
          {},
          state,
          {actualGenre: payload}
      );
    case GET_FILMS_BY_GENRE:
      return Object.assign(
          {},
          state,
          {filteredFilms: payload}
      );
    case CHANGE_FILM_COUNTER:
      return Object.assign(
          {},
          state,
          {filmCounter: payload}
      );
    default:
      return state;
  }
};
