import React, {PureComponent} from 'react';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.handlePlayerRunMode = this.handlePlayerRunMode.bind(this);
    }

    handlePlayerRunMode(mode) {
      this.setState({
        isPlaying: mode
      });
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          onChangePlayerRunMode={this.handlePlayerRunMode}
          renderVideoPlayer={
            (src, poster) => {
              return (
                <VideoPlayer
                  src={src}
                  poster={poster}
                  isPlaying={isPlaying}
                  isMuted={true}
                />
              );
            }
          }
        />
      );
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
