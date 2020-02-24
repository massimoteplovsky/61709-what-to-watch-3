import React from 'react';
import renderer from 'react-test-renderer';
import {ShowMore} from './show-more.jsx';

it(`<ShowMore /> component renders correctly`, () => {
  const tree = renderer
    .create(<ShowMore
      filmCounter={8}
      handleFilmCounterChange={()=>{}}
    />);

  expect(tree).toMatchSnapshot();
});
