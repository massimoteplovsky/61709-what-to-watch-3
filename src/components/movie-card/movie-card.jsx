import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.timerID = null;
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter(onChangePlayerRunMode) {
    this._timerID = setTimeout(() => {
      onChangePlayerRunMode(true);
    }, 1000);
  }

  _handleMouseLeave(onChangePlayerRunMode) {
    clearTimeout(this._timerID);
    onChangePlayerRunMode(false);
  }

  componentWillUnmount() {
    clearTimeout(this._timerID);
  }

  render() {
    const {
      film,
      film: {src, poster, title},
      onChangePlayerRunMode,
      onTitleClick,
      renderVideoPlayer,
    } = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => this._handleMouseEnter(onChangePlayerRunMode)}
        onMouseLeave={() => this._handleMouseLeave(onChangePlayerRunMode)}
      >
        <div className="small-movie-card__image" onClick={(event) => onTitleClick(event, film)}>
          {renderVideoPlayer(src, poster)}
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
  onChangePlayerRunMode: PropValidator.CHANGE_PLAYER_RUN_MODE,
  renderVideoPlayer: PropValidator.RENDER_VIDEO_PLAYER,
};

export {MovieCard};
export default MovieCard;
