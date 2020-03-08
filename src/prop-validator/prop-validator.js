import {
  string,
  number,
  object,
  arrayOf,
  func,
  array,
  bool,
  oneOfType,
  oneOf,
  node,
  shape
} from "prop-types";

const FilmPropType = {
  FILM_INFO: oneOfType([shape({
    id: number.isRequired,
    name: string.isRequired,
    genre: string.isRequired,
    released: number.isRequired,
    backgroundImage: string.isRequired,
    backgroundColor: string.isRequired,
    previewImage: string.isRequired,
    posterImage: string.isRequired,
    description: string.isRequired,
    rating: number.isRequired,
    scoresCount: number.isRequired,
    runTime: number.isRequired,
    director: string.isRequired,
    starring: array.isRequired,
    previewVideoLink: string.isRequired,
    videoLink: string.isRequired,
    isFavorite: false
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

const FilmReviewPropType = {
  FILM_REVIEW: arrayOf(
      shape({
        id: number.isRequired,
        user: shape({
          id: number.isRequired,
          name: string.isRequired
        }),
        rating: number.isRequired,
        comment: string.isRequired,
        date: string.isRequired
      })
  ).isRequired
};

const General = {
  CHILDREN: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
  IS_PREVIEW_MODE: bool.isRequired,
  ACTIVE_ITEM_INDEX: number.isRequired,
  CHANGE_ACTIVE_ITEM: func,
  ITEM_ID: oneOfType([
    number.isRequired,
    string.isRequired
  ]).isRequired,
  ON_LOAD: func.isRequired,
  REQUEST_ERROR: bool.isRequired,
  MATCH: object
};

const VideoPlayer = {
  IS_PLAYING: bool.isRequired,
  IS_FULL_SCREEN_MODE: bool.isRequired,
  PROGRESS: number.isRequired,
  TIME_REMAIN: string.isRequired,
  TOGGLE_PLAYING: func.isRequired,
  TOGGLE_FULL_SCREEN: func.isRequired,
};

const Auth = {
  IS_AUTH: string.isRequired,
  SEND_FROM: func.isRequired,
  USER_INFO: oneOfType([shape({
    id: number.isRequired,
    email: string.isRequired,
    name: string.isRequired,
    avatarUrl: string.isRequired
  }).isRequired, oneOf([null]).isRequired])
};

const Form = {
  CHANGE_FORM_MESSAGE: func.isRequired,
  FROM_ERROR: bool.isRequired,
  FORM_MESSAGE: string.isRequired,
  ERROR_FIELD: string.isRequired
};

export const PropValidator = Object.assign(
    {},
    FilmPropType,
    {FILMS: arrayOf(FilmPropType.FILM_INFO).isRequired},
    VideoPropType,
    MovieGenre,
    General,
    VideoPlayer,
    FilmReviewPropType,
    Auth,
    Form
);

