import React, {PureComponent, createRef} from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import {makeTimer} from "../../helpers/helpers.js";
import {getFilm} from "../../selectors/films/films.js";
import history from "../../history.js";

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
      this.handleClosePlayer = this.handleClosePlayer.bind(this);
    }

    componentDidMount() {
      const {
        isPlaying,
        isPreviewMode,
        film
      } = this.props;

      const video = this._videoRef.current;

      if (!film) {
        history.push(`/`);
        return null;
      }

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      this.setState({isPlaying});

      if (!isPreviewMode) {
        video.ontimeupdate = () => {
          this.setState({
            progress: video.currentTime / video.duration * 100,
            timeRemain: makeTimer(video.duration - video.currentTime)
          });
        };
      }

      return true;
    }

    handleClosePlayer() {
      const {id} = this.props.film;
      this.handleRunModeToggle();
      history.push(`/films/${id}`);
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

      if (video) {
        video.ontimeupdate = null;
        video.oncanplaythrough = null;
        video = null;
      }
    }

    render() {
      const {
        isPlaying,
        progress,
        isFullScreenMode,
        timeRemain,
        isLoading
      } = this.state;

      if (!this.props.film) {
        return null;
      }

      const {
        isPreviewMode,
        film: {
          name,
          videoLink,
          previewVideoLink,
          previewImage
        },
        isMuted,
      } = this.props;

      return (
        <Component
          {...this.props}
          filmName={name}
          isPlaying={isPlaying}
          isLoading={isLoading}
          progress={progress}
          timeRemain={timeRemain}
          isFullScreenMode={isFullScreenMode}
          onChangeScreenMode={this.handleFullScreenMode}
          onToggleRunMode={this.handleRunModeToggle}
          onClosePlayer={this.handleClosePlayer}
        >
          {
            isPreviewMode ?
              <video
                style={{objectFit: `cover`}}
                width="280"
                height="175"
                poster={previewImage}
                muted={isMuted}
                src={previewVideoLink}
                ref={this._videoRef}
              />
              :
              <video
                className="player__video"
                muted={isMuted}
                src={videoLink}
                ref={this._videoRef}
              />
          }
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    film: PropValidator.FILM_INFO,
    isPlaying: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    isPreviewMode: PropTypes.bool.isRequired
  };

  const mapStateToProps = (state, ownProps) => {
    return {
      film: getFilm(state, ownProps.filmID)
    };
  };

  return connect(mapStateToProps)(WithVideoPlayer);
};

export {withVideoPlayer};
export default withVideoPlayer;


