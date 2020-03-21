import {userInfo} from "../../mocks/films-test";
import {user} from "./user.js";
import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO,
} from "../../actions/types/user/user";

import {AUTH, NO_AUTH} from "../../consts";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: NO_AUTH,
    userInfo: null,
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
