import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviePromo from './movie-promo.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const handleChangeActiveItemIndex = jest.fn();

it(`video player is run`, () => {

  const wrapper = shallow(
      <MoviePromo
        id={1}
        title={``}
        genre={``}
        year={2014}
        onChangeActiveItemIndex={handleChangeActiveItemIndex}
      />
  );

  const playBtn = wrapper.find(`.btn--play`);

  playBtn.simulate(`click`);
  expect(handleChangeActiveItemIndex).toHaveBeenCalledTimes(1);
});
