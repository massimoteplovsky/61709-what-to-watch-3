import React, {PureComponent, createRef} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
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

    video.onplay = () => {
      this.setState({isPlaying: true});
    };

    video.onpause = () => {
      this.setState({isPlaying: false});
    };
  }

  componentWillUnmount() {
    let video = this._videoRef.current;
    video.onplay = null;
    video.onpause = null;
    video.src = ``;
    video = null;
  }

  render() {
    return (
      <video
        style={{objectFit: `cover`}}
        width="280"
        height="175"
        ref={this._videoRef}
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropValidator.IS_PLAYING,
  src: PropValidator.SRC,
  isMuted: PropValidator.IS_MUTED,
  poster: PropValidator.POSTER
};

export default VideoPlayer;
