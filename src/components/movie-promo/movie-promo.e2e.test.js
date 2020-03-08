import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MoviePromo} from "./movie-promo.jsx";
import {film} from "../../mocks/films-test";

Enzyme.configure({
  adapter: new Adapter(),
});

const handleToggleIsFavoriteFilm = jest.fn();

it(`video player is run`, () => {

  const wrapper = shallow(
      <MoviePromo
        filmInfo={film}
        onToggleIsFavoriteFilm={handleToggleIsFavoriteFilm}
      />
  );

  const listBtn = wrapper.find(`.btn--list`);

  listBtn.simulate(`click`);
  expect(handleToggleIsFavoriteFilm).toHaveBeenCalledTimes(1);
});
