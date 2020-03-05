import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {film} from '../../mocks/films-test';
import MovieCard from './movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {}
};

const handleClick = jest.fn((...args) => [...args]);
const handlePlayerRunMode = jest.fn();

it(`VideoPlayer mode has been changed (paused)`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        onTitleClick={() => {}}
        src={film.src}
        poster={film.poster}
        isPlaying={true}
        isMuted={true}
        isPreviewMode={true}
        onRunModeToggle={handlePlayerRunMode}
      >
        <video/>
      </MovieCard>
  );

  const card = movieCard.find(`.small-movie-card`);
  card.simulate(`mouseleave`);

  expect(handlePlayerRunMode).toHaveBeenCalledTimes(1);
});

it(`VideoPlayer mode has been chahnged (play)`, () => {

  jest.useFakeTimers();

  const movieCard = shallow(
      <MovieCard
        film={film}
        onTitleClick={() => {}}
        src={film.src}
        poster={film.poster}
        isPlaying={true}
        isMuted={true}
        isPreviewMode={true}
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

it(`Title has been clicked`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        onTitleClick={handleClick}
        src={film.src}
        poster={film.poster}
        isPlaying={true}
        isMuted={true}
        isPreviewMode={true}
        onRunModeToggle={handlePlayerRunMode}
      >
        <video/>
      </MovieCard>
  );

  const title = movieCard.find(`h3.small-movie-card__title`);
  const img = movieCard.find(`.small-movie-card__image`);

  title.simulate(`click`, mockEvent);
  img.simulate(`click`, mockEvent);

  expect(handleClick.mock.calls.length).toBe(2);
  expect(handleClick).toHaveBeenCalledWith(mockEvent, film.id);
});
