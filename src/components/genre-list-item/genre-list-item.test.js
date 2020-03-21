import React from "react";
import renderer from "react-test-renderer";
import GenreListItem from "./genre-list-item.jsx";

it(`<GenreListItem /> component renders correctly`, () => {
  const tree = renderer
    .create(<GenreListItem
      onChangeActiveItemIndex={() => {}}
      id={0}
      activeItemIndex={0}
      onChangeFilmGenre={() => {}}
      genre={``}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
