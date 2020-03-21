import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";

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
  onChangeActiveItemIndex: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  activeItemIndex: PropTypes.number.isRequired
};

export default TabsItem;
