import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieList from "../movie-list/movie-list.jsx";
import ShowMore from '../show-more/show-more.jsx';
import Footer from '../footer/footer.jsx';

const Main = ({
  filteredFilms,
  onTitleClick,
  filmCounter,
  promoFilmInfo: {title, genre, year}}
) => {

  const countFilteredFilms = (films, count) => films.length > count ? films.slice(0, count) : films;

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

          <GenreList/>

          <MovieList
            films={countFilteredFilms(filteredFilms, filmCounter)}
            onTitleClick={onTitleClick}
          />

          {filmCounter >= filteredFilms.length || <ShowMore/>}
        </section>

        <Footer/>
      </div>
    </>
  );
};

Main.propTypes = {
  promoFilmInfo: PropValidator.PROMO_FILM_INFO,
  filteredFilms: PropValidator.FILMS,
  onTitleClick: PropValidator.TITLE_CLICK,
  filmCounter: PropValidator.FILM_COUNTER
};

const mapStateToProps = ({filteredFilms, filmCounter}) => ({
  filteredFilms,
  filmCounter
});

export {Main};

export default connect(mapStateToProps)(Main);

