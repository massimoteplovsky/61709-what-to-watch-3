import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO
} from "../../types/user/user.js";
import {
  requireAuthorization,
  checkAuth,
  login
} from "./user-actions.js";
import {AUTH} from "../../../consts.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../api.js";
const api = createAPI(() => {});

describe(`Action creators work correctly`, () => {

  it(`Action creator for changing user auth status returns correct action`, () => {
    expect(requireAuthorization(AUTH)).toEqual({
      type: REQUIRED_AUTHORIZATION,
      payload: AUTH,
    });
  });

  it(`Action creator for checking auth status returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkUserAuthStatus = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkUserAuthStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRED_AUTHORIZATION,
          payload: AUTH
        });
      });
  });

  it(`Action creator for login user returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userInfo = {email: `fake@email.ru`, password: `12345`};
    const checkUserAuthStatus = login(userInfo);

    apiMock
      .onPost(`/login`, userInfo)
      .reply(200, [{fake: true}]);

    return checkUserAuthStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRED_AUTHORIZATION,
          payload: AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: LOAD_USER_INFO,
          payload: [{fake: true}]
        });
      });
  });
});

