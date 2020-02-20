import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

Enzyme.configure({adapter: new Adapter()});

jest.spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

jest.spyOn(window.HTMLMediaElement.prototype, `load`)
  .mockImplementation(() => {});

it(`VideoPlayer should have state isPlaying true`, () => {
  const player = mount(<VideoPlayer
    src={``}
    poster={``}
    isMuted={true}
    isPlaying={true}
  />);

  player.instance()._videoRef.current.onplay();

  expect(player.state().isPlaying).toBe(true);
});

it(`VideoPlayer should have state isPlaying false (paused)`, () => {
  const player = mount(<VideoPlayer
    src={``}
    poster={``}
    isMuted={true}
    isPlaying={false}
  />);

  expect(player.state().isPlaying).toBe(false);
});
