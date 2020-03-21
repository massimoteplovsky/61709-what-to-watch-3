import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO
} from "../../types/user/user";
import {AUTH} from "../../../consts";
import history from "../../../history";
import {loadAllFilms, loadPromoFilm, loadFavoritesFilms} from "../film-actions/film-actions.js";

export const requireAuthorization = (status) => {
  return {
    type: REQUIRED_AUTHORIZATION,
    payload: status,
  };
};

const loadUserInfoToState = (userInfo) => {
  return {
    type: LOAD_USER_INFO,
    payload: userInfo
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
      dispatch(loadAllFilms());
      dispatch(loadPromoFilm());
      dispatch(loadUserInfoToState(res.data));
      dispatch(loadFavoritesFilms());
      history.push(`/`);
    });
};
