import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const filmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const titleClickHandler = () => {};

it(`<Main /> component renders correctly`, () => {
  const tree = renderer
    .create(<Main
      filmInfo={filmInfo}
      filmTitles={filmTitles}
      onTitleClick={titleClickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
