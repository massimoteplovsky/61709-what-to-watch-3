import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO,
  LOAD_FAVORITES_FILMS,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES
} from "../../types/user/user";
import {AUTH} from "../../../consts";
import history from "../../../history";
import {loadAllFilms, loadPromoFilm} from "../films/films";

export const requireAuthorization = (status) => {
  return {
    type: REQUIRED_AUTHORIZATION,
    payload: status,
  };
};

export const loadUserInfoToState = (userInfo) => {
  return {
    type: LOAD_USER_INFO,
    payload: userInfo
  };
};

export const loadFavoritesFilmsToState = (films) => {
  return {
    type: LOAD_FAVORITES_FILMS,
    payload: films
  };
};

export const addToFavorites = (film) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: film
  };
};

export const deleteFromFavorites = (id) => {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: id
  };
};

export const checkAuth = () => (dispatch, _, api) => {
  return api.get(`/login`)
    .then((res) => {
      if (res.status === 200) {
        dispatch(requireAuthorization(AUTH));
        dispatch(loadUserInfoToState(res.data));
        dispatch(loadFavoritesFilms());
      }
    });
};

export const login = ({email, password}) => (dispatch, _, api) => {
  return api.post(`/login`, {
    email,
    password,
  })
    .then((res) => {
      dispatch(requireAuthorization(AUTH));
      dispatch(loadUserInfoToState(res.data));
      dispatch(loadFavoritesFilms());
      dispatch(loadAllFilms());
      dispatch(loadPromoFilm());
      history.push(`/`);
    });
};

export const loadFavoritesFilms = () => (dispatch, _, api) => {
  return api.get(`/favorite`)
    .then((res) => {
      dispatch(loadFavoritesFilmsToState(res.data));
    });
};
