import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowMore} from './show-more.jsx';
import {films} from '../../mocks/films';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleFilmCounterChange = jest.fn();

it(`Film counter has been changed`, () => {

  const wrapper = shallow(
      <ShowMore
        filmCounter={8}
        handleFilmCounterChange={handleFilmCounterChange}
        filteredFilms={films}
      />
  );

  const btn = wrapper.find(`.catalog__button`);

  btn.simulate(`click`);

  expect(handleFilmCounterChange).toHaveBeenCalledTimes(1);
});
