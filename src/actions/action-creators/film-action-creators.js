import {
  CHANGE_FILM_GENRE,
  GET_FILMS_BY_GENRE
} from '../types/film-action-types';
import {DEFAULT_GENRE} from '../../consts';

export const changeFilmGenre = (genre) => ({
  type: CHANGE_FILM_GENRE,
  payload: genre
});

const filterMovies = (genre, films) => films.filter((film) => film.genre === genre);

export const getFilmsByGenre = (genre, films) => {
  return {
    type: GET_FILMS_BY_GENRE,
    payload: genre === DEFAULT_GENRE ? films : filterMovies(genre, films)
  };
};
