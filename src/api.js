import axios from "axios";
import {convertObjectKeys} from "./helpers/helpers";
import history from "./history";

const Errors = {
  REQUEST_ERRORS: [400, 404, 500],
  NO_AUTHORIZED: 401
};

export const createAPI = (onRequestFail, onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return convertObjectKeys(response);
  };

  const onFail = (err) => {
    const {response} = err;

    if (!response || Errors.REQUEST_ERRORS.includes(response.status)) {
      onRequestFail();
      return err;
    }

    if (response.status === Errors.NO_AUTHORIZED) {
      onUnauthorized();
      history.push(`/login`);
      return err;
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
