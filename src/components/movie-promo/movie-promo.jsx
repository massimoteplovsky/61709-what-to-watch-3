import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {toggleIsFavoriteFilm} from "../../actions/action-creators/films/films";
import {AUTH} from "../../consts";

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
            onClick={() => onToggleIsFavoriteFilm(id, isFavorite ? 0 : 1)}
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
  onToggleIsFavoriteFilm: PropValidator.CHANGE_ACTIVE_ITEM,
  authorizationStatus: PropValidator.IS_AUTH
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
