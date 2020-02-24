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
  }).isRequired,
  TITLE_CLICK: func.isRequired,
  CARD_MOUSE_ENTER: func.isRequired,
  CARD_MOUSE_LEAVE: func.isRequired,
  SHOW_MORE_FILMS: func.isRequired,
  FILM_COUNTER: number.isRequired,
  RESET_FILM_COUNTER: func.isRequired
};

const VideoPropType = {
  IS_PLAYING: bool.isRequired,
  SRC: string.isRequired,
  IS_MUTED: bool.isRequired,
  POSTER: string.isRequired,
  CHANGE_PLAYER_RUN_MODE: func.isRequired,
  RENDER_VIDEO_PLAYER: func.isRequired
};

const MovieTabs = {
  ACTIVE_ITEM_INDEX: number.isRequired,
  CHANGE_ACTIVE_ITEM: func.isRequired
};

const MovieGenre = {
  CHANGE_GENRE: func.isRequired,
  GENRE: string.isRequired,
};

export const PropValidator = Object.assign(
    FilmPropType,
    {FILMS: arrayOf(FilmPropType.FILM_INFO).isRequired},
    VideoPropType,
    MovieTabs,
    MovieGenre
);

