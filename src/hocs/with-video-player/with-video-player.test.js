import React from "react";
import renderer from "react-test-renderer";
import {PropValidator} from '../../prop-validator/prop-validator';
import withVideoPlayer from "./with-video-player.js";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropValidator.CHILDREN
};

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`withVideoPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      src={``}
      poster={``}
      isPlaying={false}
      isMuted={true}
      isPreviewMode={true}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
