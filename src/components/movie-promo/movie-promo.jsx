import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {toggleIsFavoriteFilm} from "../../actions/action-creators/film-actions/film-actions.js";
import {AUTH, NOT_FAVORITE_FILM, FAVORITE_FILM} from "../../consts.js";

const MoviePromo = ({
  filmInfo,
  onToggleIsFavoriteFilm,
  authorizationStatus
}) => {

  const {
    id,
    name,
    released,
    genre,
    isFavorite
  } = filmInfo;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{name}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{released}</span>
        </p>

        <div className="movie-card__buttons">
          <Link
            to={`/player/${id}`}
            className="btn btn--play movie-card__button"
            type="button"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </Link>
          <button
            className="btn btn--list movie-card__button"
            type="button"
            onClick={() => onToggleIsFavoriteFilm(id, isFavorite ? NOT_FAVORITE_FILM : FAVORITE_FILM)}
          >
            {
              isFavorite ?
                <svg viewBox="0 0 18 14" width="18" height="14">
                  <use xlinkHref="#in-list"></use>
                </svg>
                :
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
            }
            <span>My list</span>
          </button>
          {
            authorizationStatus === AUTH &&
            <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
          }
        </div>
      </div>
    </div>
  );
};

MoviePromo.propTypes = {
  filmInfo: PropValidator.FILM_INFO,
  onToggleIsFavoriteFilm: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onToggleIsFavoriteFilm(id, status) {
    dispatch(toggleIsFavoriteFilm(id, status));
  }
});

export {MoviePromo};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePromo);
