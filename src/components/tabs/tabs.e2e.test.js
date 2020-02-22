import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {film} from '../../mocks/films-test';
import Tabs from './tabs.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleActiveItemIndex = jest.fn();
const mockEvent = {
  preventDefault() {}
};

it(`Active tab has been changed`, () => {

  const wrapper = shallow(
      <Tabs
        filmInfo={film}
        activeItemIndex={0}
        onChangeActiveItemIndex={handleActiveItemIndex}
      />
  );

  const tabs = wrapper.find(`.movie-nav__link`);

  tabs.forEach((tab, index) => {
    tab.simulate(`click`, mockEvent);
    expect(handleActiveItemIndex).toHaveBeenCalledWith(index);
  });

  expect(handleActiveItemIndex).toHaveBeenCalledTimes(tabs.length);
});
