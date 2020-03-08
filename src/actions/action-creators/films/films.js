import {
  CHANGE_FILM_GENRE,
  INCREMENT_FILM_COUNTER,
  LOAD_ALL_FILMS,
  LOAD_PROMO_FILM,
  LOAD_FILM_REVIEWS,
  CHANGE_FAVORITE_STATUS
} from '../../types/films/films';
import {addToFavorites, deleteFromFavorites} from "../user/user";

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

export const changeFavoriteStatus = (film) => {
  return {
    type: CHANGE_FAVORITE_STATUS,
    payload: film
  };
};

export const toggleIsFavoriteFilm = (id, status) => (dispatch, _, api) => {
  return api.post(`/favorite/${id}/${status}`)
  .then((res) => {
    if (res.status === 200) {
      dispatch(changeFavoriteStatus(res.data));

      if (status === 1) {
        dispatch(addToFavorites(res.data));
      }

      if (status === 0) {
        dispatch(deleteFromFavorites(id));
      }
    }
  });
};
