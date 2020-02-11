import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [
  {
    id: 1,
    title: `Terminator 2. Judgment day`,
    poster: ``
  },
  {
    id: 2,
    title: `1+1`,
    poster: ``
  },
  {
    id: 3,
    title: `Joker`,
    poster: ``
  },
  {
    id: 4,
    title: `Once upon a time in Hollywood`,
    poster: ``
  },
  {
    id: 5,
    title: `Ford vs Ferrari`,
    poster: ``
  },
  {
    id: 6,
    title: `1917`,
    poster: ``
  },
  {
    id: 7,
    title: `Parasite`,
    poster: ``
  },
  {
    id: 8,
    title: `Irishman`,
    poster: ``
  },
];
const currentFilm = films[0];
const handleTest = jest.fn();
const handleMouseEnter = jest.fn((...args) => [...args]);

it(`Title has been clicked`, () => {

  const movieCard = shallow(
      <MovieCard
        film={currentFilm}
        onMouseEnter={handleTest}
        onTitleClick={handleTest}
      />
  );

  const title = movieCard.find(`h3.small-movie-card__title`);

  title.simulate(`click`);

  expect(handleTest.mock.calls.length).toBe(1);
});

it(`Movie data has been passed to the callback handler`, () => {

  const movieCard = shallow(
      <MovieCard
        film={currentFilm}
        onMouseEnter={handleMouseEnter}
        onTitleClick={handleTest}
      />
  );

  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseenter`);
  expect(handleMouseEnter).toHaveBeenCalledWith(1);
});
