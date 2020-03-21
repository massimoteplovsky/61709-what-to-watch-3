import React from "react";
import {connect} from "react-redux";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";
import {changeFilmGenre} from "../../actions/action-creators/film-actions/film-actions.js";
import {getFilms} from "../../selectors/films/films.js";
import GenreItemList from "../genre-list-item/genre-list-item.jsx";
import {DEFAULT_GENRE} from "../../consts.js";

const GenreList = ({
  films,
  onChangeFilmGenre,
  onChangeActiveItemIndex,
  activeItemIndex
}) => {
  const genres = [...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])];

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
              onChangeFilmGenre = {() => onChangeFilmGenre(genre)}
            />
          );
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  films: PropTypes.arrayOf(PropValidator.FILM_INFO).isRequired,
  onChangeFilmGenre: PropTypes.func.isRequired,
  onChangeActiveItemIndex: PropTypes.func.isRequired,
  activeItemIndex: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilmGenre(genre) {
    dispatch(changeFilmGenre(genre));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
