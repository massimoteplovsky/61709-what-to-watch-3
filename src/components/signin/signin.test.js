import React from 'react';
import renderer from 'react-test-renderer';
import {Signin} from './signin.jsx';

it(`<Signin /> component renders correctly`, () => {
  const tree = renderer
    .create(<Signin
      sendForm={() => {}}
      onChangeActiveItemIndex={() => {}}
      onChangeFormMessage={()=>{}}
      formError={false}
      formMessage={``}
      errorField={``}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
