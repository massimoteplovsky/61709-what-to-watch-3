import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

const GenreList = ({films, actualGenre, onChangeFilmGenre}) => {

  const genres = [...new Set([`All genres`, ...films.map((film) => film.genre)])];

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => {
          return (
            <li
              key={genre}
              className={actualGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
            >
              <a
                href="#"
                className="catalog__genres-link"
                onClick={(event) => {
                  event.preventDefault();
                  onChangeFilmGenre(genre, films);
                }}
              >{genre}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  films: PropValidator.FILMS,
  actualGenre: PropValidator.GENRE,
  onChangeFilmGenre: PropValidator.CHANGE_GENRE
};

export default GenreList;
