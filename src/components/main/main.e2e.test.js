import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const filmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Should welcome button be clicked`, () => {
  const titleClickHandler = jest.fn();

  const main = shallow(
      <Main
        filmInfo={filmInfo}
        filmTitles={filmTitles}
        onTitleClick={titleClickHandler}
      />
  );

  const titles = main.find(`h3.small-movie-card__title`);

  titles.forEach((title) => {
    title.simulate(`click`);
  });

  expect(titleClickHandler.mock.calls.length).toBe(3);
});
