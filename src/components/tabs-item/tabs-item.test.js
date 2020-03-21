import React from "react";
import renderer from "react-test-renderer";
import TabsItem from "./tabs-item.jsx";

it(`<TabsItem /> component renders correctly`, () => {
  const tree = renderer
    .create(<TabsItem
      id={0}
      onChangeActiveItemIndex={() => {}}
      title={``}
      activeItemIndex={0}
    />);

  expect(tree).toMatchSnapshot();
});
