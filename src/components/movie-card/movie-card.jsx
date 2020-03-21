import React, {PureComponent} from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";
import history from "../../history.js";

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
      onToggleRunMode,
      isPlaying
    } = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this._timerID = setTimeout(() => onToggleRunMode(true), 1000);
        }}
        onMouseLeave={() => {
          if (isPlaying) {
            onToggleRunMode();
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
  children: PropValidator.CHILD_NODE,
  onToggleRunMode: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
