import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO
} from '../../types/user/user';
import {AUTH, NO_AUTH} from '../../../consts';

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

export const checkAuth = () => (dispatch, getState, api) => {
  return api.get(`/login`)
    .then(() => {
      dispatch(requireAuthorization(NO_AUTH));
    });
};

export const login = ({email, password}) => (dispatch, getState, api) => {
  return api.post(`/login`, {
    email,
    password,
  })
    .then((res) => {
      dispatch(requireAuthorization(AUTH));
      dispatch(loadUserInfoToState(res.data));
    });
};
