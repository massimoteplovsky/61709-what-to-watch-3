import React from "react";
import renderer from "react-test-renderer";
import withSigninForm from "./with-signin-form.js";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withSigninForm(MockComponent);

it(`withSigninForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
