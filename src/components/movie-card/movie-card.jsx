import React, {PureComponent} from "react";
import {PropValidator} from "../../prop-validator/prop-validator";
import {Link} from "react-router-dom";
import history from "../../history";

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
      film: {id, name},
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
        <div
          className="small-movie-card__image"
          onClick={() => history.push(`/films/${id}`)}
        >
          {children}
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropValidator.FILM_INFO,
  children: PropValidator.CHILDREN,
  onRunModeToggle: PropValidator.TOGGLE_PLAYING,
  isPlaying: PropValidator.IS_PLAYING
};

export default MovieCard;
