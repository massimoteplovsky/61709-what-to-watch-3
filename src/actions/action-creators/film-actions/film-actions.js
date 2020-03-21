import {
  CHANGE_FILM_GENRE,
  INCREMENT_FILM_COUNTER,
  LOAD_ALL_FILMS,
  LOAD_PROMO_FILM,
  LOAD_FILM_REVIEWS,
  CHANGE_FAVORITE_STATUS,
  ADD_REVIEW,
  LOAD_FAVORITES_FILMS,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES
} from "../../types/films/films";
import history from "../../../history";
import {FAVORITE_FILM} from "../../../consts";

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

const changeFavoriteStatus = (film) => ({
  type: CHANGE_FAVORITE_STATUS,
  payload: film
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: review
});

const loadFavoritesFilmsToState = (films) => ({
  type: LOAD_FAVORITES_FILMS,
  payload: films
});

const addToFavoriteFilms = (film) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: film
  };
};

const deleteFromFavoriteFilms = (id) => {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: id
  };
};

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

export const toggleIsFavoriteFilm = (id, status) => (dispatch, _, api) => {
  return api.post(`/favorite/${id}/${status}`)
  .then((res) => {
    if (res.status === 200) {
      dispatch(changeFavoriteStatus(res.data));

      if (status === FAVORITE_FILM) {
        dispatch(addToFavoriteFilms(res.data));
      } else {
        dispatch(deleteFromFavoriteFilms(id));
      }
    }
  });
};

export const loadFavoritesFilms = () => (dispatch, _, api) => {
  return api.get(`/favorite`)
    .then((res) => {
      dispatch(loadFavoritesFilmsToState(res.data));
    });
};

export const sendReview = (reviewInfo, filmID, onFormSuccess) => (dispatch, _, api) => {
  return api.post(`/comments/${filmID}`, reviewInfo)
    .then((res) => {
      dispatch(addReview(res.data));
      onFormSuccess();
      setTimeout(() => history.push(`/films/${filmID}`), 1500);
    });
};
