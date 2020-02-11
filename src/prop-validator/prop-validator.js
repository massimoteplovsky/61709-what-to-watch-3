import {
  exact,
  string,
  number,
  arrayOf,
  func,
  shape
} from "prop-types";

export const FilmPropType = {
  PROMO_FILM_INFO: exact({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired
  }),
  FILMS: arrayOf(
      exact({
        id: number.isRequired,
        title: string.isRequired,
        poster: string.isRequired
      })
  ).isRequired,
  FILM_INFO: shape({
    id: number.isRequired,
    title: string.isRequired,
    poster: string.isRequired
  }).isRequired,
  TITLE_CLICK: func.isRequired,
  CARD_MOUSE_ENTER: func.isRequired
};
