import React, {PureComponent, createRef} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

const withVideoPlayer = (Component) => {

  class WithVideoPlayer extends PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: false,
      };

      this._videoRef = createRef();
    }

    componentDidMount() {
      const {src, isMuted, poster, isPlaying} = this.props;
      const video = this._videoRef.current;

      this.setState({isPlaying});

      video.src = src;
      video.muted = isMuted;
      video.poster = poster;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.onplay = () => {
        this.setState({isPlaying: true});
      };

      video.onpause = () => {
        this.setState({isPlaying: false});
      };

      video.ontimeupdate = () => this.setState({
        progress: Math.floor(video.currentTime),
      });
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying, isPreviewMode} = this.props;

      if (isPlaying) {
        video.play();
      } else {
        if (isPreviewMode) {
          video.load();
        } else {
          video.pause();
        }
      }
    }

    componentWillUnmount() {
      let video = this._videoRef.current;
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
      video.ontimeupdate = null;
      video = null;
    }

    render() {
      const {isPlaying, isLoading} = this.state;
      const {isPreviewMode} = this.props;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
        >
          {
            isPreviewMode ?
              <video
                style={{objectFit: `cover`}}
                width="280"
                height="175"
                ref={this._videoRef}
              />
              :
              <video
                ref={this._videoRef}
              />
          }
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    isPlaying: PropValidator.IS_PLAYING,
    src: PropValidator.SRC,
    isMuted: PropValidator.IS_MUTED,
    poster: PropValidator.POSTER,
    isPreviewMode: PropValidator.IS_PREVIEW_MODE
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
