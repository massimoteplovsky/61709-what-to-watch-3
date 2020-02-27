import React from 'react';
import renderer from 'react-test-renderer';

import PreviewVideoPlayer from './preview-video-player.jsx';

it(`<PreviewVideoPlayer /> is rendered correctly`, () => {

  const tree = renderer.create(
      <PreviewVideoPlayer>
        <video/>
      </PreviewVideoPlayer>, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
