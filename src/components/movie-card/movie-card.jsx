import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._timerID = null;
  }

  componentWillUnmount() {
    clearTimeout(this._timerID);
  }

  render() {
    const {
      film,
      film: {title},
      onTitleClick,
      children,
      onRunModeToggle,
      isPlaying
    } = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this._timerID = setTimeout(() => onRunModeToggle(true), 1000);
        }}
        onMouseLeave={() => {
          if (isPlaying) {
            onRunModeToggle();
          }
          clearTimeout(this._timerID);
        }}
      >
        <div className="small-movie-card__image" onClick={(event) => onTitleClick(event, film)}>
          {children}
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
  children: PropValidator.CHILDREN,
  onRunModeToggle: PropValidator.TOGGLE_PLAYING,
  isPlaying: PropValidator.IS_PLAYING
};

export {MovieCard};
export default MovieCard;
