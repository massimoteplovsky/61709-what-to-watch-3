import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from 'react-redux';
import {getFilteredFilms, getPromoFilm} from '../../selectors/films/films';
import Header from '../header/header.jsx';
import MoviePromo from '../movie-promo/movie-promo.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieList from "../movie-list/movie-list.jsx";
import ShowMore from '../show-more/show-more.jsx';
import Footer from '../footer/footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const WrappedGenreList = withActiveItem(GenreList);

const Main = ({
  films,
  promoFilm
}) => {

  if (!promoFilm) {
    return null;
  }

  const {
    name,
    backgroundImage,
  } = promoFilm;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <MoviePromo filmInfo={promoFilm}/>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <WrappedGenreList/>

          <MovieList films={films}/>

          <ShowMore/>
        </section>

        <Footer/>
      </div>
    </>
  );
};

Main.propTypes = {
  films: PropValidator.FILMS,
  promoFilm: PropValidator.FILM_INFO,
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
  promoFilm: getPromoFilm(state)
});

export {Main};

export default connect(mapStateToProps)(Main);

