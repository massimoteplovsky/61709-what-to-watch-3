import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator";
import Header from '../header/header.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieList from "../movie-list/movie-list.jsx";
import Footer from '../footer/footer.jsx';

const Main = ({
  films,
  filteredFilms,
  onTitleClick,
  actualGenre,
  onChangeFilmGenre,
  promoFilmInfo: {title, genre, year}}
) => {

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            films={films}
            onChangeFilmGenre={onChangeFilmGenre}
            actualGenre={actualGenre}
          />

          <MovieList films={filteredFilms} onTitleClick={onTitleClick}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

Main.propTypes = {
  promoFilmInfo: PropValidator.PROMO_FILM_INFO,
  films: PropValidator.FILMS,
  filteredFilms: PropValidator.FILMS,
  actualGenre: PropValidator.GENRE,
  onChangeFilmGenre: PropValidator.CHANGE_GENRE,
  onTitleClick: PropValidator.TITLE_CLICK
};

export default Main;

