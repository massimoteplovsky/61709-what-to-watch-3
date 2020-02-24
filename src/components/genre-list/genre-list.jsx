import React from 'react';
import {connect} from 'react-redux';
import {PropValidator} from '../../prop-validator/prop-validator';
import {changeFilmGenre, getFilmsByGenre, changeFilmCounter} from '../../actions/action-creators/film-action-creators';
import {FILM_TO_SHOW} from '../../consts';

const GenreList = ({films, actualGenre, handleFilmGenreChange}) => {

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
                  handleFilmGenreChange(genre, films, FILM_TO_SHOW);
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
  handleFilmGenreChange: PropValidator.CHANGE_GENRE
};

const mapStateToProps = ({films, actualGenre}) => ({
  films,
  actualGenre
});

const mapDispatchToProps = (dispatch) => ({
  handleFilmGenreChange(genre, films, count) {
    dispatch(changeFilmGenre(genre));
    dispatch(getFilmsByGenre(genre, films));
    dispatch(changeFilmCounter(count));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
