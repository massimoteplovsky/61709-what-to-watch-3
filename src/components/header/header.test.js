import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header.jsx';
import {userInfo} from "../../mocks/films-test";

it(`<Header /> component renders correctly`, () => {
  const tree = renderer
    .create(<Header
      isAuth = {`NO_AUTH`}
      activeItemIndex = {0}
      onChangeActiveItemIndex={() => {}}
      userInfo={userInfo}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
