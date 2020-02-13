import {
  exact,
  string,
  number,
  arrayOf,
  func,
  shape,
  array
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
        genre: arrayOf(string).isRequired,
        year: number.isRequired,
        promoPoster: string.isRequired,
        poster: string.isRequired,
        cover: string.isRequired,
        description: string.isRequired,
        rating: number.isRequired,
        votes: number.isRequired,
        director: string.isRequired,
        starring: array.isRequired
      })
  ).isRequired,
  FILM_INFO: shape({
    id: number.isRequired,
    title: string.isRequired,
    genre: arrayOf(string).isRequired,
    year: number.isRequired,
    promoPoster: string.isRequired,
    poster: string.isRequired,
    cover: string.isRequired,
    description: string.isRequired,
    rating: number.isRequired,
    votes: number.isRequired,
    director: string.isRequired,
    starring: array.isRequired
  }).isRequired,
  TITLE_CLICK: func.isRequired,
  CARD_MOUSE_ENTER: func.isRequired
};
