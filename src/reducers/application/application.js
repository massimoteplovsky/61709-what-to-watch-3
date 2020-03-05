import {
  REQUEST_FAIL
} from '../../actions/types/application/application';

const initialState = {
  error: false
};

export const application = (state = initialState, {type, payload}) => {
  switch (type) {
    case REQUEST_FAIL:
      return Object.assign(
          {},
          state,
          {error: payload}
      );
    default:
      return state;
  }
};
