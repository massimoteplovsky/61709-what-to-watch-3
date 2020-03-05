import {
  REQUEST_FAIL
} from '../../types/application/application';

export const requestFail = () => ({
  type: REQUEST_FAIL,
  payload: true
});
