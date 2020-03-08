import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import MovieCard from '../movie-card/movie-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const WrappedMovieCard = withVideoPlayer(MovieCard);

const MovieList = ({films}) => {

  if (films.length === 0) {
    return (
      <h2>No movies</h2>
    );
  }

  return (
    <div className="catalog__movies-list">
      {
        films.map((film) => {
          return (
            <WrappedMovieCard
              key={film.id}
              film={film}
              src={film.previewVideoLink}
              poster={film.previewImage}
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
  films: PropValidator.FILMS,
};

export {MovieList};
export default MovieList;
