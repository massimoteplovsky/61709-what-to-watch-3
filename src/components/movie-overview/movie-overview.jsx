import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {makeRating, makeTextRating} from "../../helpers/helpers.js";

const MovieOverview = ({filmInfo}) => {
  const {rating, scoresCount, director, starring, description} = filmInfo;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{makeRating(rating)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{makeTextRating(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  filmInfo: PropValidator.FILM_INFO
};

export default MovieOverview;
