import React, {PureComponent} from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header.jsx";
import MoviePromo from "../movie-promo/movie-promo.jsx";
import Tabs from "../tabs/tabs.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import Footer from "../footer/footer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import history from "../../history.js";
import {getRelatedFilmsList, getFilm, getFilmReviews, getFilms} from "../../selectors/films/films.js";
import {loadFilmReviews} from "../../actions/action-creators/film-actions/film-actions.js";

const WrappedTabs = withActiveItem(Tabs);

class Movie extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const {filmInfo, onLoadFilmReviews} = this.props;

    if (!filmInfo) {
      return history.push(`/`);
    }

    return onLoadFilmReviews(filmInfo.id);
  }

  componentDidUpdate(prevProps) {
    const {filmInfo, onLoadFilmReviews} = this.props;
    const {id} = this.props.match.params;

    if (!filmInfo) {
      return history.push(`/`);
    }

    if (prevProps.match.params.id !== id) {
      onLoadFilmReviews(id);
    }

    return null;
  }

  render() {
    const {
      filmInfo,
      relatedFilms,
      filmReviews
    } = this.props;

    if (!filmInfo) {
      return null;
    }

    const {
      name,
      backgroundImage,
      backgroundColor,
      posterImage,
    } = filmInfo;

    return (
        <>
          <section style={{background: backgroundColor}} className="movie-card movie-card--full">
            <div className="movie-card__hero">
              <div className="movie-card__bg">
                <img src={backgroundImage} alt={name} />
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <Header additionalClass="movie-card__head"/>

              <MoviePromo filmInfo={filmInfo}/>
            </div>

            <div className="movie-card__wrap movie-card__translate-top">
              <div className="movie-card__info">
                <div className="movie-card__poster movie-card__poster--big">
                  <img src={posterImage} alt={name} width="218" height="327" />
                </div>

                <div className="movie-card__desc">
                  <WrappedTabs
                    filmInfo={filmInfo}
                    filmReviews={filmReviews}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <MovieList
                films={relatedFilms}
                message={`No related movies`}
              />
            </section>

            <Footer/>
          </div>
        </>
    );
  }
}

Movie.propTypes = {
  relatedFilms: PropTypes.arrayOf(PropValidator.FILM_INFO),
  filmInfo: PropValidator.FILM_INFO,
  filmReviews: PropValidator.FILM_REVIEW,
  onLoadFilmReviews: PropTypes.func.isRequired,
  match: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    films: getFilms(state),
    filmInfo: getFilm(state, ownProps.match.params.id),
    relatedFilms: getRelatedFilmsList(state, ownProps.match.params.id),
    filmReviews: getFilmReviews(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmReviews(filmID) {
    dispatch(loadFilmReviews(filmID));
  }
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
