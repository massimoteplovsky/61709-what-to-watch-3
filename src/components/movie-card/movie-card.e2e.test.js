import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {film} from '../../mocks/films-test';
import MovieCard from './movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleClick = jest.fn((...args) => [...args]);
const handlePlayerRunMode = jest.fn();

it(`VideoPlayer mode has been chahnged (paused)`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        onTitleClick={handleClick}
        onChangePlayerRunMode={handlePlayerRunMode}
        renderVideoPlayer={() => {}}
      />
  );

  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseleave`);

  expect(handlePlayerRunMode).toHaveBeenCalledTimes(1);
  expect(handlePlayerRunMode).toHaveBeenCalledWith(false);
});

it(`Title has been clicked`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        onTitleClick={handleClick}
        onChangePlayerRunMode={handlePlayerRunMode}
        renderVideoPlayer={() => {}}
      />
  );

  const title = movieCard.find(`h3.small-movie-card__title`);
  const img = movieCard.find(`.small-movie-card__image`);

  title.simulate(`click`);
  img.simulate(`click`);

  expect(handleClick.mock.calls.length).toBe(2);
  expect(handleClick.mock.calls[0][1]).toMatchObject(film);
});

it(`VideoPlayer mode has been chahnged (play)`, () => {
  jest.useFakeTimers();
  const movieCard = shallow(
      <MovieCard
        film={film}
        onChangePlayerRunMode={handlePlayerRunMode}
        onTitleClick={handleClick}
        renderVideoPlayer={() => {}}
      />
  );

  const card = movieCard.find(`.small-movie-card`);

  setTimeout(() => {
    card.simulate(`mouseenter`);
    expect(handlePlayerRunMode.mock.calls.length).toBe(1);
    expect(handlePlayerRunMode).toHaveBeenCalledWith(true);
  }, 1000);
});
