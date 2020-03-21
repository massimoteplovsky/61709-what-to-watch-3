import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films} from "../../mocks/films-test";

const mockStore = configureMockStore([]);
let store = mockStore({
  films: {
    film: films[0]
  }
});

it(`<VideoPlayer /> component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <VideoPlayer
            isPlaying={true}
            isFullScreenMode={false}
            filmName={``}
            isLoading={false}
            progress={0}
            timeRemain={``}
            onToggleRunMode={() => {}}
            onChangeScreenMode={() => {}}
            onClosePlayer={() => {}}
          >
            <video/>
          </VideoPlayer>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }}).toJSON();

  expect(tree).toMatchSnapshot();
});
