import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import PreviewVideoPlayer from '../preview-video-player/preview-video-player.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const WrappedPreviewVideoPlayer = withVideoPlayer(PreviewVideoPlayer);

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._timerID = null;
  }

  _handleMouseEnter(cb, id) {
    this._timerID = setTimeout(() => {
      cb(id);
    }, 1000);
  }

  _handleMouseLeave(cb) {
    clearTimeout(this._timerID);
    cb(0);
  }

  componentWillUnmount() {
    clearTimeout(this._timerID);
  }

  render() {
    const {
      film,
      film: {src, poster, title, id},
      onTitleClick,
      activeItemIndex,
      onChangeActiveItemIndex
    } = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => this._handleMouseEnter(onChangeActiveItemIndex, id)}
        onMouseLeave={() => this._handleMouseLeave(onChangeActiveItemIndex)}
      >
        <div className="small-movie-card__image" onClick={(event) => onTitleClick(event, film)}>
          <WrappedPreviewVideoPlayer
            src={src}
            poster={poster}
            isPlaying={id === activeItemIndex}
            isMuted={true}
            isPreviewMode={true}
          />
        </div>
        <h3
          className="small-movie-card__title"
          onClick={(event) => onTitleClick(event, film)}
        >
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropValidator.FILM_INFO,
  onTitleClick: PropValidator.TITLE_CLICK,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM
};

export {MovieCard};
export default MovieCard;
