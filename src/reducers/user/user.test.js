import {userInfo} from '../../mocks/films-test';
import {user} from './user.js';
import {
  requireAuthorization,
  loadUserInfoToState,
  checkAuth
} from '../../actions/action-creators/user/user';
import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO
} from '../../actions/types/user/user';

import MockAdapter from "axios-mock-adapter";
import {createAPI} from '../../api';
import {AUTH, NO_AUTH} from '../../consts';
const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: NO_AUTH,
    userInfo: null
  });
});

it(`Reducer should check change authorization status`, () => {
  expect(user({
    authorizationStatus: NO_AUTH,
    userInfo: null
  }, {
    type: REQUIRED_AUTHORIZATION,
    payload: AUTH,
  })).toEqual({
    authorizationStatus: AUTH,
    userInfo: null
  });
});

it(`Reducer should change user info`, () => {
  expect(user({
    authorizationStatus: AUTH,
    userInfo: null
  }, {
    type: LOAD_USER_INFO,
    payload: userInfo,
  })).toEqual({
    authorizationStatus: AUTH,
    userInfo
  });
});

describe(`Action creators work correctly`, () => {

  it(`Action creator for changing user info returns correct action`, () => {
    expect(loadUserInfoToState(userInfo)).toEqual({
      type: LOAD_USER_INFO,
      payload: userInfo,
    });
  });

  it(`Action creator for changing user auth status returns correct action`, () => {
    expect(requireAuthorization(AUTH)).toEqual({
      type: REQUIRED_AUTHORIZATION,
      payload: AUTH,
    });
  });

  it(`Action creator for loading films returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthFunc = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthFunc(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRED_AUTHORIZATION,
          payload: NO_AUTH
        });
      });
  });
});
