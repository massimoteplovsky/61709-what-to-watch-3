import React from 'react';
import {connect} from 'react-redux';
import {PropValidator} from '../../prop-validator/prop-validator';
import {changeFilmGenre, getFilmsByGenre, changeFilmCounter} from '../../actions/action-creators/film-action-creators';
import GenreItemList from '../genre-list-item/genre-list-item.jsx';

const GenreList = ({films, handleFilmGenreChange, filteredFilms, filmCounter, onChangeActiveItemIndex, activeItemIndex}) => {

  const genres = [...new Set([`All genres`, ...films.map((film) => film.genre)])];

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, index) => {
          return (
            <GenreItemList
              key={index}
              genre={genre}
              id={index}
              activeItemIndex={activeItemIndex}
              onChangeActiveItemIndex = {onChangeActiveItemIndex}
              onFilmGenreChange = {() => handleFilmGenreChange(genre, films, filteredFilms, filmCounter)}
            />
          );
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  films: PropValidator.FILMS,
  handleFilmGenreChange: PropValidator.CHANGE_GENRE,
  filteredFilms: PropValidator.FILMS,
  filmCounter: PropValidator.FILM_COUNTER,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX
};

const mapStateToProps = ({films, filteredFilms, filmCounter}) => ({
  films,
  filteredFilms,
  filmCounter
});

const mapDispatchToProps = (dispatch) => ({
  handleFilmGenreChange(genre, films, filteredFilms, filmCounter) {
    dispatch(changeFilmGenre(genre));
    dispatch(getFilmsByGenre(genre, films));
    dispatch(changeFilmCounter(filteredFilms, filmCounter));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
