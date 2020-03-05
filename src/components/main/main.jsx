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
import VideoPlayer from '../video-player/video-player.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const WrappedGenreList = withActiveItem(GenreList);
const WrappedVideoPlayer = withVideoPlayer(VideoPlayer);

const Main = ({
  films,
  activeItemIndex,
  onChangeActiveItemIndex,
  onTitleClick,
  promoFilm
}) => {

  if (!promoFilm) {
    return null;
  }

  const {
    id,
    name,
    backgroundImage,
    videoLink
  } = promoFilm;

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
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <MoviePromo
          filmInfo={promoFilm}
          onChangeActiveItemIndex={onChangeActiveItemIndex}
        />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <WrappedGenreList/>

          <MovieList
            films={films}
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
  films: PropValidator.FILMS,
  promoFilm: PropValidator.FILM_INFO,
  onTitleClick: PropValidator.TITLE_CLICK,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
  promoFilm: getPromoFilm(state)
});

export {Main};

export default connect(mapStateToProps)(Main);

