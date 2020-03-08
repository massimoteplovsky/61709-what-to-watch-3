import React from "react";
import renderer from "react-test-renderer";
import {Signin} from "./signin.jsx";
import {Router} from "react-router-dom";
import history from "../../history";

it(`<Signin /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Signin
            sendForm={() => {}}
            onChangeActiveItemIndex={() => {}}
            onChangeFormMessage={()=>{}}
            formError={false}
            formMessage={``}
            errorField={``}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
