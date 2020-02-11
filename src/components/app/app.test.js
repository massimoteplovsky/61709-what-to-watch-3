import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const promoFilmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const films = [
  {
    id: 1,
    title: `Terminator 2. Judgment day`,
    poster: ``
  },
  {
    id: 2,
    title: `1+1`,
    poster: ``
  },
  {
    id: 3,
    title: `Joker`,
    poster: ``
  },
  {
    id: 4,
    title: `Once upon a time in Hollywood`,
    poster: ``
  },
  {
    id: 5,
    title: `Ford vs Ferrari`,
    poster: ``
  },
  {
    id: 6,
    title: `1917`,
    poster: ``
  },
  {
    id: 7,
    title: `Parasite`,
    poster: ``
  },
  {
    id: 8,
    title: `Irishman`,
    poster: ``
  },
];

it(`<App /> component renders correctly`, () => {
  const tree = renderer
    .create(<App
      promoFilmInfo={promoFilmInfo}
      films={films}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
