import {
  exact,
  string,
  number,
  arrayOf,
  func
} from "prop-types";

export const FilmPropType = {
  INFO: exact({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired
  }),
  TITLE: arrayOf(string).isRequired,
  TITLE_CLICK: func.isRequired
};
