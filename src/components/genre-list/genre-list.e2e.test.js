import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {films} from '../../mocks/films-test';
import {GenreList} from './genre-list.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleFilmGenreChange = jest.fn();

const genres = [...new Set([`All genres`, ...films.map((film) => film.genre)])];
const mockEvent = {
  preventDefault() {}
};
const filmConter = 8;

it(`Change film genre handler has been called`, () => {

  const wrapper = shallow(
      <GenreList
        films={films}
        handleFilmGenreChange={handleFilmGenreChange}
        filteredFilms={films}
        filmCounter={filmConter}
        onChangeActiveItemIndex={() => {}}
        activeItemIndex={0}
      />
  );

  const links = wrapper.find(`.catalog__genres-link`);

  links.forEach((link, index) => {
    link.simulate(`click`, mockEvent);
    expect(handleFilmGenreChange).toHaveBeenCalledWith(genres[index], films, filmConter);
  });

  expect(handleFilmGenreChange).toHaveBeenCalledTimes(links.length);
});
