import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

const GenreListItem = ({
  onChangeActiveItemIndex,
  id,
  activeItemIndex,
  onFilmGenreChange,
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
          onFilmGenreChange();
        }}
      >{genre}</a>
    </li>
  );
};

GenreListItem.propTypes = {
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX,
  genre: PropValidator.GENRE,
  id: PropValidator.ITEM_ID,
  onFilmGenreChange: PropValidator.CHANGE_GENRE,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM,
};

export default GenreListItem;
