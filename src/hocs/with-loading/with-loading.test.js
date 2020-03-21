import React from "react";
import renderer from "react-test-renderer";
import withLoading from "./with-loading.js";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withLoading(MockComponent);

it(`withLoading is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
