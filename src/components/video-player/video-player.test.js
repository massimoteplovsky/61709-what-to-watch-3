import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

it(`<VideoPlayer /> is rendered correctly`, () => {

  const tree = renderer.create(<VideoPlayer
    isPlaying={false}
    isMuted={false}
    poster={``}
    src={``}
  />, {
    createNodeMock: () => {
      return {};
    }}).toJSON();

  expect(tree).toMatchSnapshot();
});
