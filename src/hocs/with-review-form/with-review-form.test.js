import React from "react";
import renderer from "react-test-renderer";
import withReviewForm from "./with-review-form.js";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withReviewForm(MockComponent);

it(`withReviewForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
