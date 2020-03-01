import React from 'react';
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

const WrappedTabs = withActiveItem(Tabs);
const WrappedVideoPlayer = withVideoPlayer(VideoPlayer);

const Movie = ({filmInfo, films, onChangeActiveItemIndex, activeItemIndex, onTitleClick}) => {
  const {
    id,
    title,
    genre,
    year,
    promoPoster,
    cover,
    poster,
    src
  } = filmInfo;

  const RELATED_MOVIE_COUNT = 4;

  const findRelatedFilms = (movies) => {
    return movies.filter((movie) => {
      return movie.genre === genre && movie.title !== title;
    }).slice(0, RELATED_MOVIE_COUNT);
  };

  if (activeItemIndex === id) {
    return (
      <WrappedVideoPlayer
        src={src}
        isMuted={false}
        poster={poster}
        isPlaying={true}
        isPreviewMode={false}
        onChangeActiveItemIndex={onChangeActiveItemIndex}
      />
    );
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={promoPoster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <MoviePromo
            id={id}
            title={title}
            genre={genre}
            year={year}
            onChangeActiveItemIndex={onChangeActiveItemIndex}
          />
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
  onTitleClick: PropValidator.TITLE_CLICK,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM
};

const mapStateToProps = ({films}) => ({
  films
});

export {Movie};
export default connect(mapStateToProps)(Movie);
