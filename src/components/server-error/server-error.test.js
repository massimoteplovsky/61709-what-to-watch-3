import React from "react";
import renderer from "react-test-renderer";
import ServerError from "./server-error.jsx";

it(`<ServerError /> component renders correctly`, () => {
  const tree = renderer
    .create(<ServerError/>);
  expect(tree).toMatchSnapshot();
});
