import React, {PureComponent} from "react";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from 'react-redux';
import {getFilteredFilms, getPromoFilm} from '../../selectors/films/films';
import {changeFilmGenre} from "../../actions/action-creators/films/films";
import Header from '../header/header.jsx';
import MoviePromo from '../movie-promo/movie-promo.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieList from "../movie-list/movie-list.jsx";
import ShowMore from '../show-more/show-more.jsx';
import Footer from '../footer/footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {DEFAULT_GENRE} from "../../consts";

const WrappedGenreList = withActiveItem(GenreList);

class Main extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onChangeFilmGenre} = this.props;
    onChangeFilmGenre(DEFAULT_GENRE);
  }

  render() {

    const {
      filteredFilms,
      promoFilm
    } = this.props;

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

            <Header additionalClass="movie-card__head"/>

            <MoviePromo filmInfo={promoFilm}/>
          </section>

          <div className="page-content">
            <section className="catalog">
              <h2 className="catalog__title visually-hidden">Catalog</h2>

              <WrappedGenreList/>

              <MovieList films={filteredFilms}/>

              <ShowMore/>
            </section>

            <Footer/>
          </div>
        </>
    );
  }
}

Main.propTypes = {
  filteredFilms: PropValidator.FILMS,
  promoFilm: PropValidator.FILM_INFO,
  onChangeFilmGenre: PropValidator.CHANGE_GENRE
};

const mapStateToProps = (state) => ({
  filteredFilms: getFilteredFilms(state),
  promoFilm: getPromoFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilmGenre(genre) {
    dispatch(changeFilmGenre(genre));
  }
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

