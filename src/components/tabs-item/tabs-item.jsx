import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

const TabsItem = ({
  id,
  onChangeActiveItemIndex,
  title,
  activeItemIndex
}) => {
  return (
    <li className={activeItemIndex === id ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
      <a
        href="#"
        className="movie-nav__link"
        onClick={(event) => {
          event.preventDefault();
          onChangeActiveItemIndex(id);
        }}
      >
        {title}
      </a>
    </li>
  );
};

TabsItem.propTypes = {
  id: PropValidator.ITEM_ID,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM,
  title: PropValidator.TITLE,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX
};

export default TabsItem;
