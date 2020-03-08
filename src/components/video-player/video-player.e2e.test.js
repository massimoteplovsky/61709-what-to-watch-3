import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const handleFullScreenMode = jest.fn();
const handleRunModeToggle = jest.fn();

it(`All handlers has been called`, () => {

  const wrapper = shallow(
      <VideoPlayer
        isPlaying={true}
        isFullScreenMode={false}
        progress={0}
        timeRemain={``}
        onRunModeToggle={handleRunModeToggle}
        onFullScreenMode={handleFullScreenMode}
      >
        <video/>
      </VideoPlayer>
  );

  const playBtn = wrapper.find(`.player__play`);
  const fullModeBtn = wrapper.find(`.player__full-screen`);
  const exitBtn = wrapper.find(`.player__exit`);

  playBtn.simulate(`click`);
  fullModeBtn.simulate(`click`);
  exitBtn.simulate(`click`);

  expect(handleRunModeToggle).toHaveBeenCalledTimes(2);
  expect(handleFullScreenMode).toHaveBeenCalledTimes(1);
});
