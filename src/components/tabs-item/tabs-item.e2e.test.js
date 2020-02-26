import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TabsItem from './tabs-item.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleChangeActiveItemIndex = jest.fn();
const mockEvent = {
  preventDefault() {}
};

it(`Change item index handler has been called`, () => {

  const wrapper = shallow(
      <TabsItem
        id={0}
        onChangeActiveItemIndex={handleChangeActiveItemIndex}
        title={``}
        activeItemIndex={0}
      />
  );

  const link = wrapper.find(`.movie-nav__link`);

  link.simulate(`click`, mockEvent);

  expect(handleChangeActiveItemIndex).toHaveBeenCalledWith(0);
  expect(handleChangeActiveItemIndex).toHaveBeenCalledTimes(1);
});
