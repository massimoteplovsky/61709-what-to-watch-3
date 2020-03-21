import {
  REQUEST_FAIL
} from "../../types/application/application.js";

import {
  requestFail
} from "./application-actions.js";

describe(`Action creators work correctly`, () => {

  it(`Action creator for changing error flag returns correct action`, () => {
    expect(requestFail()).toEqual({
      type: REQUEST_FAIL,
      payload: true,
    });
  });
});


