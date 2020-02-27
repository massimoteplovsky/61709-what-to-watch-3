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

it(`VideoPlayer mode has been changed (paused)`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        onTitleClick={handleClick}
        onChangeActiveItemIndex={handlePlayerRunMode}
        activeItemIndex={0}
      />
  );

  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseleave`);

  expect(handlePlayerRunMode).toHaveBeenCalledTimes(1);
  expect(handlePlayerRunMode).toHaveBeenCalledWith(0);
});

it(`VideoPlayer mode has been chahnged (play)`, () => {

  jest.useFakeTimers();

  const movieCard = shallow(
      <MovieCard
        film={film}
        onTitleClick={handleClick}
        onChangeActiveItemIndex={handlePlayerRunMode}
        activeItemIndex={1}
      />
  );

  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseenter`);

  jest.runAllTimers();

  expect(handlePlayerRunMode).toHaveBeenCalledTimes(2);
  expect(handlePlayerRunMode).toHaveBeenCalledWith(1);
});

it(`Title has been clicked`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        onTitleClick={handleClick}
        onChangeActiveItemIndex={handlePlayerRunMode}
        activeItemIndex={1}
      />
  );

  const title = movieCard.find(`h3.small-movie-card__title`);
  const img = movieCard.find(`.small-movie-card__image`);

  title.simulate(`click`);
  img.simulate(`click`);

  expect(handleClick.mock.calls.length).toBe(2);
  expect(handleClick.mock.calls[0][1]).toMatchObject(film);
});
