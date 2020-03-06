import {
  REQUIRED_AUTHORIZATION,
  LOAD_USER_INFO
} from '../../actions/types/user/user';
import {NO_AUTH} from '../../consts';

const initialState = {
  authorizationStatus: NO_AUTH,
  userInfo: null
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
    default:
      return state;
  }
};
