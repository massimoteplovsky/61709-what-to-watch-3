import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review.jsx";
import {Router} from "react-router-dom";
import {film, userInfo} from "../../mocks/films-test";
import history from "../../history.js";

it(`<AddReview/> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <AddReview
            filmInfo={film}
            userInfo={userInfo}
            comment={``}
            rating={4}
            isDisabled={false}
            isCommentValid={true}
            isRatingValid={true}
            isFormValid={true}
            onChange={() => {}}
            onDisable={() => {}}
            onSendReview={() => {}}
            onSendFormSuccess={() => {}}
            formMessage={``}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
