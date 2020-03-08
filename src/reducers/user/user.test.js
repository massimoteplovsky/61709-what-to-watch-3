import {userInfo, films, film} from "../../mocks/films-test";
import {user} from "./user.js";
import {
  requireAuthorization,
  loadUserInfoToState,
  checkAuth
} from "../../actions/action-creators/user/user";
import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO,
  LOAD_FAVORITES_FILMS,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES
} from "../../actions/types/user/user";

import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {AUTH, NO_AUTH} from "../../consts";
const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: NO_AUTH,
    userInfo: null,
    favorites: []
  });
});

it(`Reducer should check change authorization status`, () => {
  expect(user({
    authorizationStatus: NO_AUTH,
    userInfo: null,
    favorites: []
  }, {
    type: REQUIRED_AUTHORIZATION,
    payload: AUTH,
  })).toEqual({
    authorizationStatus: AUTH,
    userInfo: null,
    favorites: []
  });
});

it(`Reducer should change user info`, () => {
  expect(user({
    authorizationStatus: AUTH,
    userInfo: null,
    favorites: []
  }, {
    type: LOAD_USER_INFO,
    payload: userInfo,
  })).toEqual({
    authorizationStatus: AUTH,
    userInfo,
    favorites: []
  });
});

it(`Reducer should change favorites film list`, () => {
  expect(user({
    authorizationStatus: AUTH,
    userInfo: null,
    favorites: []
  }, {
    type: LOAD_FAVORITES_FILMS,
    payload: films,
  })).toEqual({
    authorizationStatus: AUTH,
    userInfo: null,
    favorites: films
  });
});

it(`Reducer should add a film into favorites list`, () => {
  expect(user({
    authorizationStatus: AUTH,
    userInfo,
    favorites: []
  }, {
    type: ADD_TO_FAVORITES,
    payload: film,
  })).toEqual({
    authorizationStatus: AUTH,
    userInfo,
    favorites: [film]
  });
});

it(`Reducer should add a film into favorites list`, () => {
  expect(user({
    authorizationStatus: AUTH,
    userInfo,
    favorites: [film]
  }, {
    type: DELETE_FROM_FAVORITES,
    payload: 1,
  })).toEqual({
    authorizationStatus: AUTH,
    userInfo,
    favorites: []
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
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRED_AUTHORIZATION,
          payload: AUTH
        });
      });
  });
});
