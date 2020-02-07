import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const filmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`<App /> component renders correctly`, () => {
  const tree = renderer
    .create(<App
      filmInfo={filmInfo}
      filmTitles={filmTitles}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
