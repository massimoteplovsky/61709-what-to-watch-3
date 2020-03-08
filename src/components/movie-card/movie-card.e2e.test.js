import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {film} from "../../mocks/films-test";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const handlePlayerRunMode = jest.fn();

it(`VideoPlayer mode has been changed (paused)`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        isPlaying={true}
        onRunModeToggle={handlePlayerRunMode}
      >
        <video/>
      </MovieCard>
  );
  const card = movieCard.find(`.small-movie-card`);
  card.simulate(`mouseleave`);

  expect(handlePlayerRunMode).toHaveBeenCalledTimes(1);
});

it(`VideoPlayer mode has been changed (play)`, () => {

  jest.useFakeTimers();

  const movieCard = shallow(
      <MovieCard
        film={film}
        isPlaying={true}
        onRunModeToggle={handlePlayerRunMode}
      >
        <video/>
      </MovieCard>
  );

  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseenter`);

  jest.runAllTimers();

  expect(handlePlayerRunMode).toHaveBeenCalledTimes(2);
});
