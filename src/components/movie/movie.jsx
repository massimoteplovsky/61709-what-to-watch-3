import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import Tabs from '../tabs/tabs.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import Footer from '../footer/footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const WrappedTabs = withActiveItem(Tabs);

const Movie = ({filmInfo, films, onTitleClick}) => {
  const {
    title,
    genre,
    year,
    promoPoster,
    cover,
  } = filmInfo;

  const RELATED_MOVIE_COUNT = 4;

  const findRelatedFilms = (movies) => {
    return movies.filter((movie) => {
      return movie.genre === genre && movie.title !== title;
    }).slice(0, RELATED_MOVIE_COUNT);
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={promoPoster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={cover} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <WrappedTabs
                filmInfo={filmInfo}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieList
            films={findRelatedFilms(films)}
            onTitleClick={onTitleClick}
          />
        </section>

        <Footer/>
      </div>
    </>
  );
};

Movie.propTypes = {
  films: PropValidator.FILMS,
  filmInfo: PropValidator.FILM_INFO,
  onTitleClick: PropValidator.TITLE_CLICK
};

const mapStateToProps = ({films}) => ({
  films
});

export {Movie};
export default connect(mapStateToProps)(Movie);
