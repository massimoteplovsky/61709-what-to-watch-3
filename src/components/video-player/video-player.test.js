import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

it(`<VideoPlayer /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          isPlaying={true}
          isFullScreenMode={false}
          progress={0}
          timeRemain={``}
          onRunModeToggle={() => {}}
          onFullScreenMode={() => {}}
          onChangeActiveItemIndex={() => {}}
        >
          <video/>
        </VideoPlayer>
    );

  expect(tree).toMatchSnapshot();
});
