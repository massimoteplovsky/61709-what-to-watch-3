import {
  exact,
  string,
  number,
  arrayOf,
  func,
  array,
  bool
} from "prop-types";

const FilmPropType = {
  PROMO_FILM_INFO: exact({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired
  }),
  FILM_INFO: exact({
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
    starring: array.isRequired,
    src: string.isRequired
  }).isRequired,
  TITLE_CLICK: func.isRequired,
  CARD_MOUSE_ENTER: func.isRequired,
  CARD_MOUSE_LEAVE: func.isRequired
};

const VideoPropType = {
  IS_PLAYING: bool.isRequired,
  SRC: string.isRequired,
  IS_MUTED: bool.isRequired,
  POSTER: string.isRequired
};

export const PropValidator = Object.assign(
    FilmPropType,
    {FILMS: arrayOf(FilmPropType.FILM_INFO).isRequired},
    VideoPropType
);

