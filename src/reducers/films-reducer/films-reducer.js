import {films} from '../../mocks/films';
import {
  CHANGE_FILM_GENRE,
  GET_FILMS_BY_GENRE
} from '../../actions/types/film-action-types';

const initialState = {
  films,
  filteredFilms: films,
  actualGenre: `All genres`
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
    default:
      return state;
  }
};
