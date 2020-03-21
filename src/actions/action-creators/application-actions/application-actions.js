import {
  REQUEST_FAIL
} from "../../types/application/application.js";

export const requestFail = () => ({
  type: REQUEST_FAIL,
  payload: true
});


