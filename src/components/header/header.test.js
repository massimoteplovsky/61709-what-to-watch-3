import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";
import {userInfo} from "../../mocks/films-test";
import {Router} from "react-router-dom";
import {AUTH} from "../../consts.js";
import history from "../../history";

it(`<Header /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Header
            authorizationStatus={AUTH}
            userInfo={userInfo}
            additionalClass={``}
          />
        </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
