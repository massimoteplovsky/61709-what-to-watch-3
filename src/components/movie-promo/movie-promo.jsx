import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

const MoviePromo = ({title, year, genre}) => {

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{year}</span>
        </p>

        <div className="movie-card__buttons">
          <button className="btn btn--play movie-card__button" type="button">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <button className="btn btn--list movie-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
          </button>
          <a href="add-review.html" className="btn movie-card__button">Add review</a>
        </div>
      </div>
    </div>
  );
};

MoviePromo.propTypes = {
  genre: PropValidator.GENRE,
  title: PropValidator.TITLE,
  year: PropValidator.YEAR
};

export default MoviePromo;
