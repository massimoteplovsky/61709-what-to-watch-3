import React from "react";
import renderer from "react-test-renderer";
import {PropValidator} from "../../prop-validator/prop-validator";
import withVideoPlayer from "./with-video-player.js";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films} from "../../mocks/films-test";

const mockStore = configureMockStore([]);
let store = mockStore({
  films: {
    films
  }
});

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
    <Provider store={store}>
      <MockComponentWrapped
        film={``}
        isPlaying={false}
        isMuted={true}
        isPreviewMode={true}
      />
    </Provider>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
