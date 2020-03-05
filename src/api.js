import axios from "axios";
import {convertObjectKeys} from './helpers/helpers';

const Errors = {
  REQUEST_ERRORS: [400, 404, 500],
};

export const createAPI = (onRequestFail) => {
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

    if (Errors.REQUEST_ERRORS.includes(response.status)) {
      onRequestFail();
      return Promise.reject(err);
    }

    return Promise.reject(err);

  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
