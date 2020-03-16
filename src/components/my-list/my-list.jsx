import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import {connect} from "react-redux";
import {PropValidator} from "../../prop-validator/prop-validator.js";

const MyList = ({favoriteFilms}) => {

  return (
    <div className="user-page">

      <Header additionalClass="user-page__head"/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList
          films={favoriteFilms}
          message={`No favorite films`}
        />
      </section>

      <Footer/>
    </div>
  );
};

MyList.propTypes = {
  favoriteFilms: PropValidator.FILMS
};

const stateToProps = (state) => ({
  favoriteFilms: state.user.favorites
});

export default connect(stateToProps)(MyList);
