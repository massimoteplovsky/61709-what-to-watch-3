import React from 'react';
import VideoPlayer from '../video-player/video-player.jsx';
import {PropValidator} from '../../prop-validator/prop-validator';

const MovieCard = ({film, isPlaying, onTitleClick, onMouseEnter, onMouseLeave}) => {
  const {id, title, poster, src} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image" onClick={(event) => onTitleClick(event, film)}>
        <VideoPlayer
          src={src}
          poster={poster}
          isMuted={true}
          isPlaying={isPlaying}
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
  film: PropValidator.FILM_INFO,
  onTitleClick: PropValidator.TITLE_CLICK,
  onMouseEnter: PropValidator.CARD_MOUSE_ENTER,
  isPlaying: PropValidator.IS_PLAYING,
  onMouseLeave: PropValidator.CARD_MOUSE_LEAVE
};

export default MovieCard;
