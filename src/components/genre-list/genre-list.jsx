import React from 'react';
import {connect} from 'react-redux';
import {PropValidator} from '../../prop-validator/prop-validator';
import {changeFilmGenre} from '../../actions/action-creators/films/films';
import {getFilms} from '../../selectors/films/films';
import GenreItemList from '../genre-list-item/genre-list-item.jsx';

const GenreList = ({
  films,
  handleFilmGenreChange,
  onChangeActiveItemIndex,
  activeItemIndex
}) => {
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
              onFilmGenreChange = {() => handleFilmGenreChange(genre)}
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
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleFilmGenreChange(genre) {
    dispatch(changeFilmGenre(genre));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
