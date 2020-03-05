import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import MoviePromo from '../movie-promo/movie-promo.jsx';
import Tabs from '../tabs/tabs.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import Footer from '../footer/footer.jsx';
import VideoPlayer from '../video-player/video-player.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {makeRelatedFilmsList, getFilm, getFilmReviews} from '../../selectors/films/films';
import {loadFilmReviews} from '../../actions/action-creators/films/films';

const WrappedTabs = withActiveItem(Tabs);
const WrappedVideoPlayer = withVideoPlayer(VideoPlayer);

class Movie extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {filmID, onLoadFilmReviews} = this.props;
    onLoadFilmReviews(filmID);
  }

  componentDidUpdate(prevProps) {
    const {filmID, onLoadFilmReviews} = this.props;

    if (prevProps.filmID !== this.props.filmID) {
      onLoadFilmReviews(filmID);
    }
  }

  render() {
    const {
      filmInfo,
      films,
      onChangeActiveItemIndex,
      activeItemIndex,
      onTitleClick,
      filmReviews
    } = this.props;

    const {
      id,
      name,
      backgroundImage,
      backgroundColor,
      posterImage,
      videoLink
    } = filmInfo;

    if (activeItemIndex === id) {
      return (
        <WrappedVideoPlayer
          src={videoLink}
          isMuted={false}
          poster={backgroundImage}
          isPlaying={true}
          isPreviewMode={false}
          onChangeActiveItemIndex={onChangeActiveItemIndex}
        />
      );
    }

    return (
        <>
          <section style={{background: backgroundColor}} className="movie-card movie-card--full">
            <div className="movie-card__hero">
              <div className="movie-card__bg">
                <img src={backgroundImage} alt={name} />
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <Header/>

              <MoviePromo
                filmInfo={filmInfo}
                onChangeActiveItemIndex={onChangeActiveItemIndex}
              />
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
                films={films}
                onTitleClick={onTitleClick}
              />
            </section>

            <Footer/>
          </div>
        </>
    );
  }
}

Movie.propTypes = {
  films: PropValidator.FILMS,
  filmInfo: PropValidator.FILM_INFO,
  onTitleClick: PropValidator.TITLE_CLICK,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM,
  filmReviews: PropValidator.FILM_REVIEW,
  filmID: PropValidator.ITEM_ID,
  onLoadFilmReviews: PropValidator.ON_LOAD
};

const mapStateToProps = (state, ownProps) => ({
  films: makeRelatedFilmsList(state, ownProps.filmID),
  filmInfo: getFilm(state, ownProps.filmID),
  filmReviews: getFilmReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmReviews(filmID) {
    dispatch(loadFilmReviews(filmID));
  }
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
