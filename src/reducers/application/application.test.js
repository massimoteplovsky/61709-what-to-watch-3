import {application} from "./application.js";
import {
  REQUEST_FAIL
} from "../../actions/types/application/application.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(application(void 0, {})).toEqual({
    error: false
  });
});

it(`Reducer should check change error status`, () => {
  expect(application({
    error: false
  }, {
    type: REQUEST_FAIL,
    payload: true,
  })).toEqual({
    error: true
  });
});
