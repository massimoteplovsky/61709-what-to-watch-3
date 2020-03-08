import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO,
  LOAD_FAVORITES_FILMS,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES
} from '../../actions/types/user/user';
import {NO_AUTH} from '../../consts';

const initialState = {
  authorizationStatus: NO_AUTH,
  userInfo: null,
  favorites: []
};

export const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case REQUIRED_AUTHORIZATION:
      return Object.assign(
          {},
          state,
          {authorizationStatus: payload}
      );
    case LOAD_USER_INFO:
      return Object.assign(
          {},
          state,
          {userInfo: payload}
      );
    case LOAD_FAVORITES_FILMS:
      return Object.assign(
          {},
          state,
          {favorites: payload}
      );
    case ADD_TO_FAVORITES:
      return Object.assign(
          {},
          state,
          {favorites: [...state.favorites, payload]}
      );
    case DELETE_FROM_FAVORITES:
      const favoritesFilms = state.favorites.filter((film) => film.id !== payload);
      return Object.assign(
          {},
          state,
          {favorites: [...favoritesFilms]}
      );
    default:
      return state;
  }
};
