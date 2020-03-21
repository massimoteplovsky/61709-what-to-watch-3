import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";

const WrappedMovieCard = withVideoPlayer(MovieCard);

const MovieList = ({films, message}) => {

  if (films.length === 0) {
    return (
      <p>{message}</p>
    );
  }

  return (
    <div className="catalog__movies-list">
      {
        films.map((film) => {
          const {id} = film;
          return (
            <WrappedMovieCard
              key={id}
              film={film}
              filmID={id}
              isPlaying={false}
              isMuted={true}
              isPreviewMode={true}
            />
          );
        })
      }
    </div>
  );

};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropValidator.FILM_INFO),
  message: PropTypes.string
};

export default MovieList;
