import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import MovieCard from '../movie-card/movie-card.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const WrappedMovieCard = withActiveItem(MovieCard);

const MovieList = ({films, onTitleClick}) => {

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
              onTitleClick={onTitleClick}
            />
          );
        })
      }
    </div>
  );

};

MovieList.propTypes = {
  films: PropValidator.FILMS,
  onTitleClick: PropValidator.TITLE_CLICK,
};

export default MovieList;
