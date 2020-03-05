import {
  CHANGE_FILM_GENRE,
  INCREMENT_FILM_COUNTER,
  LOAD_ALL_FILMS,
  LOAD_PROMO_FILM,
  LOAD_FILM_REVIEWS
} from '../../types/films/films';

export const changeFilmGenre = (genre) => ({
  type: CHANGE_FILM_GENRE,
  payload: genre
});

export const incrementFilmCounter = () => ({
  type: INCREMENT_FILM_COUNTER,
  payload: null
});

const loadFilmsToState = (films) => ({
  type: LOAD_ALL_FILMS,
  payload: films
});

const loadPromoFilmToState = (promoFilm) => ({
  type: LOAD_PROMO_FILM,
  payload: promoFilm
});

const loadFilmReviewsToState = (reviews) => ({
  type: LOAD_FILM_REVIEWS,
  payload: reviews
});

export const loadAllFilms = () => (dispatch, _, api) => {
  return api.get(`/films`)
    .then((res) => {
      dispatch(loadFilmsToState(res.data));
    });
};

export const loadPromoFilm = () => (dispatch, _, api) => {
  return api.get(`/films/promo`)
    .then((res) => {
      dispatch(loadPromoFilmToState(res.data));
    });
};

export const loadFilmReviews = (filmID) => (dispatch, _, api) => {
  return api.get(`/comments/${filmID}`)
    .then((res) => {
      dispatch(loadFilmReviewsToState(res.data));
    });
};
