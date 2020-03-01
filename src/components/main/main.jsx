import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from 'react-redux';
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
  activeItemIndex,
  onChangeActiveItemIndex,
  filteredFilms,
  onTitleClick,
  promoFilmInfo: {
    id,
    title,
    genre,
    year,
    poster,
    src
  }
}) => {

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
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
  filmCounter: PropValidator.FILM_COUNTER,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM
};

const mapStateToProps = ({filteredFilms, filmCounter}) => ({
  filteredFilms: filteredFilms.length > filmCounter ? filteredFilms.slice(0, filmCounter) : filteredFilms,
  filmCounter
});

export {Main};

export default connect(mapStateToProps)(Main);

