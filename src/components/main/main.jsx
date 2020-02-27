import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import MoviePromo from '../movie-promo/movie-promo.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieList from "../movie-list/movie-list.jsx";
import ShowMore from '../show-more/show-more.jsx';
import Footer from '../footer/footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const WrappedGenreList = withActiveItem(GenreList);

const Main = ({
  filteredFilms,
  onTitleClick,
  promoFilmInfo: {
    title,
    genre,
    year
  }
}) => {

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <MoviePromo
          title={title}
          genre={genre}
          year={year}
        />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <WrappedGenreList/>

          <MovieList
            films={filteredFilms}
            onTitleClick={onTitleClick}
          />

          <ShowMore/>
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
  filteredFilms: filteredFilms.length > filmCounter ? filteredFilms.slice(0, filmCounter) : filteredFilms,
  filmCounter
});

export {Main};

export default connect(mapStateToProps)(Main);

