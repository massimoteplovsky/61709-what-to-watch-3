import React from "react";
import renderer from "react-test-renderer";
import {film, filmReviews} from "../../mocks/films-test";
import Tabs from "./tabs.jsx";

it(`<Tabs /> component renders correctly`, () => {
  const tree = renderer
    .create(<Tabs
      filmInfo={film}
      filmReviews={filmReviews}
      activeItemIndex={0}
      onChangeActiveItemIndex={() => {}}
    />);

  expect(tree).toMatchSnapshot();
});
