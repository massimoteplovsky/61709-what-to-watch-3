import {
  exact,
  string,
  number,
  arrayOf,
  func,
  array,
  bool,
  oneOfType,
  oneOf,
  node
} from "prop-types";

const FilmPropType = {
  PROMO_FILM_INFO: exact({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired
  }),
  FILM_INFO: oneOfType([exact({
    id: number.isRequired,
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
    promoPoster: string.isRequired,
    poster: string.isRequired,
    cover: string.isRequired,
    description: string.isRequired,
    rating: number.isRequired,
    votes: number.isRequired,
    runtime: number.isRequired,
    director: string.isRequired,
    starring: array.isRequired,
    src: string.isRequired,
    reviews: arrayOf(
        exact({
          text: string.isRequired,
          author: string.isRequired,
          date: string.isRequired,
          rating: number.isRequired
        })
    ).isRequired
  }).isRequired, oneOf([null]).isRequired]),
  TITLE_CLICK: func.isRequired,
  CARD_MOUSE_ENTER: func.isRequired,
  CARD_MOUSE_LEAVE: func.isRequired,
  SHOW_MORE_FILMS: func.isRequired,
  CHANGE_ACTIVE_FILM: func.isRequired,
  FILM_COUNTER: number.isRequired,
  TITLE: string.isRequired,
  YEAR: number.isRequired,
  GENRE: string.isRequired,
};

const VideoPropType = {
  IS_PLAYING: bool.isRequired,
  SRC: string.isRequired,
  IS_MUTED: bool.isRequired,
  POSTER: string.isRequired,
};

const MovieGenre = {
  CHANGE_GENRE: func.isRequired,
};

const General = {
  CHILDREN: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
  IS_PREVIEW_MODE: bool.isRequired,
  ACTIVE_ITEM_INDEX: number.isRequired,
  CHANGE_ACTIVE_ITEM: func.isRequired,
  ITEM_ID: number.isRequired,
};

export const PropValidator = Object.assign(
    FilmPropType,
    {FILMS: arrayOf(FilmPropType.FILM_INFO).isRequired},
    VideoPropType,
    MovieGenre,
    General
);

