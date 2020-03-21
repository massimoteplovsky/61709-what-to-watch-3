import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import MoviePromo from '../movie-promo/movie-promo.jsx';
import Tabs from '../tabs/tabs.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import Footer from '../footer/footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {makeRelatedFilmsList, getFilm, getFilmReviews} from '../../selectors/films/films';
import {loadFilmReviews} from '../../actions/action-creators/films/films';

const WrappedTabs = withActiveItem(Tabs);

class Movie extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFilmReviews} = this.props;
    const {id} = this.props.match.params;
    onLoadFilmReviews(id);
  }

  componentDidUpdate(prevProps) {
    const {onLoadFilmReviews} = this.props;
    const {id} = this.props.match.params;

    if (prevProps.match.params.id !== id) {
      onLoadFilmReviews(id);
    }
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

              <Header/>

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
              />
            </section>

            <Footer/>
          </div>
        </>
    );
  }
}

Movie.propTypes = {
  relatedFilms: PropValidator.FILMS,
  filmInfo: PropValidator.FILM_INFO,
  filmReviews: PropValidator.FILM_REVIEW,
  onLoadFilmReviews: PropValidator.ON_LOAD,
  match: PropValidator.MATCH,
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params;
  return {
    relatedFilms: makeRelatedFilmsList(state, id),
    filmInfo: getFilm(state, id),
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
