import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowMore} from './show-more.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleFilmCounterChange = jest.fn();

it(`Film counter has been changed`, () => {

  const wrapper = shallow(
      <ShowMore
        handleFilmCounterChange={handleFilmCounterChange}
        filmCounter={8}
      />
  );

  const btn = wrapper.find(`.catalog__button`);

  btn.simulate(`click`);

  expect(handleFilmCounterChange).toHaveBeenCalledTimes(1);
  expect(handleFilmCounterChange).toHaveBeenCalledWith(16);
});
