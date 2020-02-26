import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreListItem from './genre-list-item.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleChangeActiveItemIndex = jest.fn();
const mockEvent = {
  preventDefault() {}
};

it(`Change item index handler has been called`, () => {

  const wrapper = shallow(
      <GenreListItem
        onChangeActiveItemIndex={handleChangeActiveItemIndex}
        id={2}
        activeItemIndex={0}
        onFilmGenreChange={() => {}}
        genre={``}
      />
  );

  const link = wrapper.find(`.catalog__genres-link`);

  link.simulate(`click`, mockEvent);

  expect(handleChangeActiveItemIndex).toHaveBeenCalledWith(2);
  expect(handleChangeActiveItemIndex).toHaveBeenCalledTimes(1);
});
