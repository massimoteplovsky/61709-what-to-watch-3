import React, {PureComponent, createRef} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {makeTimer} from '../../helpers/helpers';

const withVideoPlayer = (Component) => {

  class WithVideoPlayer extends PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: false,
        isFullScreenMode: false,
        timeRemain: ``
      };

      this._videoRef = createRef();
      this.handleRunModeToggle = this.handleRunModeToggle.bind(this);
      this.handleFullScreenMode = this.handleFullScreenMode.bind(this);
    }

    componentDidMount() {
      const {
        isPlaying,
        isPreviewMode
      } = this.props;
      const video = this._videoRef.current;

      this.setState({isPlaying});

      if (!isPreviewMode) {
        video.ontimeupdate = () => {
          this.setState({
            progress: video.currentTime / video.duration * 100,
            timeRemain: makeTimer(video.duration - video.currentTime)
          });
        };
      }
    }

    handleRunModeToggle() {
      const {isPlaying} = this.state;
      this.setState({isPlaying: !isPlaying});
    }

    handleFullScreenMode() {
      const {isFullScreenMode} = this.state;
      this.setState({
        isFullScreenMode: !isFullScreenMode
      });
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPreviewMode} = this.props;
      const {isPlaying} = this.state;

      if (video.ended) {

        if (isPreviewMode) {
          video.load();
          return;
        }

        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.setState({isPlaying: false});
          })
          .catch((err) => {
            throw new Error(err);
          });
        }
      }

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
      video.src = ``;
      video.ontimeupdate = null;
      video = null;
    }

    render() {

      const {
        isPlaying,
        progress,
        isFullScreenMode,
        timeRemain
      } = this.state;

      const {
        isPreviewMode,
        poster,
        src,
        isMuted,
      } = this.props;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          progress={progress}
          timeRemain={timeRemain}
          isFullScreenMode={isFullScreenMode}
          onFullScreenMode={this.handleFullScreenMode}
          onRunModeToggle={this.handleRunModeToggle}
        >
          {
            isPreviewMode ?
              <video
                style={{objectFit: `cover`}}
                width="280"
                height="175"
                poster={poster}
                muted={isMuted}
                src={src}
                ref={this._videoRef}
              />
              :
              <video
                className="player__video"
                muted={isMuted}
                src={src}
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
