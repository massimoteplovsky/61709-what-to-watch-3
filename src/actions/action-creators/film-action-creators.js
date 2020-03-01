import {
  CHANGE_FILM_GENRE,
  GET_FILMS_BY_GENRE,
  CHANGE_FILM_COUNTER
} from '../types/film-action-types';
import {DEFAULT_GENRE, FILM_TO_SHOW} from '../../consts';

const filterFilms = (genre, films) => films.filter((film) => film.genre === genre);

export const changeFilmGenre = (genre) => ({
  type: CHANGE_FILM_GENRE,
  payload: genre
});

export const getFilmsByGenre = (genre, films) => ({
  type: GET_FILMS_BY_GENRE,
  payload: genre === DEFAULT_GENRE ? films : filterFilms(genre, films)
});

export const changeFilmCounter = (filteredFilmsCount, filmCounter) => ({
  type: CHANGE_FILM_COUNTER,
  payload: filteredFilmsCount > filmCounter ? filmCounter + FILM_TO_SHOW : FILM_TO_SHOW
});
