import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";

const GenreListItem = ({
  onChangeActiveItemIndex,
  id,
  activeItemIndex,
  onChangeFilmGenre,
  genre
}) => {
  return (
    <li
      className={activeItemIndex === id ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(event) => {
          event.preventDefault();
          onChangeActiveItemIndex(id);
          onChangeFilmGenre();
        }}
      >{genre}</a>
    </li>
  );
};

GenreListItem.propTypes = {
  activeItemIndex: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropValidator.ITEM_ID,
  onChangeFilmGenre: PropTypes.func.isRequired,
  onChangeActiveItemIndex: PropTypes.func.isRequired,
};

export default GenreListItem;
