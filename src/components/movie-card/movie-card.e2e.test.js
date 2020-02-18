import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {film} from '../../mocks/films-test';
import MovieCard from './movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleMouseEnter = jest.fn((...args) => [...args]);
const handleClick = jest.fn((...args) => [...args]);
const handleMouseLeave = jest.fn();

it(`Mouse leave triggered`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        isPlaying={false}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTitleClick={handleClick}
      />
  );

  const card = movieCard.find(`.small-movie-card`).at(0);

  card.simulate(`mouseleave`);

  expect(handleMouseLeave.mock.calls.length).toBe(1);
});

it(`Title has been clicked`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        isPlaying={false}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTitleClick={handleClick}
      />
  );

  const title = movieCard.find(`h3.small-movie-card__title`);
  const img = movieCard.find(`.small-movie-card__image`);

  title.simulate(`click`);
  img.simulate(`click`);

  expect(handleClick.mock.calls.length).toBe(2);
  expect(handleClick.mock.calls[0][1]).toMatchObject(film);
});

it(`Movie data has been passed to the callback handler`, () => {

  const movieCard = shallow(
      <MovieCard
        film={film}
        isPlaying={false}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTitleClick={handleClick}
      />
  );

  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseenter`);
  expect(handleMouseEnter.mock.calls.length).toBe(1);
  expect(handleMouseEnter).toHaveBeenCalledWith(1);
});
