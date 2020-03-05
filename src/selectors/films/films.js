import {createSelector} from "reselect";
import {DEFAULT_GENRE, RELATED_FILM_COUNT} from "../../consts";

export const getFilms = (state) => {
  return state.films.films;
};

export const getFilmCounter = (state) => {
  return state.films.filmCounter;
};

export const getActualGenre = (state) => {
  return state.films.actualGenre;
};

export const getFilm = (state, filmID) => {
  return state.films.films.find((film) => film.id === filmID);
};

export const getPromoFilm = (state) => {
  return state.films.promoFilm;
};

export const getFilmReviews = (state) => {
  return state.films.reviews;
};

const showFilteredFilms = (films, count) => {
  if (films.length > count) {
    return films.slice(0, count);
  }

  return films;
};

export const getFilteredFilms = createSelector(
    getFilms,
    getActualGenre,
    getFilmCounter,
    (films, genre, count) => {
      if (genre === DEFAULT_GENRE) {
        return showFilteredFilms(films, count);
      }

      const filteredFilms = films.filter((film) => film.genre === genre);
      return showFilteredFilms(filteredFilms, count);
    }
);

export const makeRelatedFilmsList = createSelector(
    getFilms,
    getFilm,
    (films, searchedFilm) => {
      return films.filter((film) => {
        return film.id !== searchedFilm.id && film.genre === searchedFilm.genre;
      }).slice(0, RELATED_FILM_COUNT);
    }
);

