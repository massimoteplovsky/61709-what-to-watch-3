import React from "react";
import {FilmPropType} from "../../prop-validator/prop-validator";

const MovieCard = ({film, onTitleClick, onMouseEnter}) => {
  const {id, title, poster} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(id)}
    >
      <div className="small-movie-card__image" onClick={(event) => onTitleClick(event, film)}>
        <img
          src={poster}
          alt={title}
          width="280"
          height="175"
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
};

MovieCard.propTypes = {
  film: FilmPropType.FILM_INFO,
  onTitleClick: FilmPropType.TITLE_CLICK,
  onMouseEnter: FilmPropType.CARD_MOUSE_ENTER
};

export default MovieCard;
