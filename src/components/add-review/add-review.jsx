import React, {Fragment} from "react";
import {connect} from "react-redux";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";
import {Link, Redirect} from "react-router-dom";
import history from "../../history.js";
import {getFilm} from "../../selectors/films/films.js";
import {getUserInfo} from "../../selectors/user/user.js";
import {sendReview} from "../../actions/action-creators/film-actions/film-actions.js";
import {BASE_URL} from "../../consts.js";
import withReviewForm from "../../hocs/with-review-form/with-review-form.js";

const ratings = new Array(5).fill(``).map((_, i) => i + 1);

const AddReview = ({
  filmInfo,
  userInfo,
  comment,
  rating,
  isDisabled,
  isCommentValid,
  isRatingValid,
  isFormValid,
  onChange,
  onDisable,
  onSendReview,
  onSendFormSuccess,
  formMessage
}) => {

  if (!filmInfo) {
    return <Redirect to="/"/>;
  }

  const {
    id,
    backgroundImage,
    posterImage,
    name
  } = filmInfo;

  const {
    avatarUrl,
    name: userName
  } = userInfo;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    onDisable(true);

    onSendReview({rating, comment}, id, onSendFormSuccess);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src={`${BASE_URL}${avatarUrl}`}
                alt={userName} width="63" height="63"
                onClick={() => history.push(`/myList`)}
              />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          onSubmit={onSubmitHandler}
          action="#"
          className="add-review__form"
        >
          <div className="rating">
            <div className="rating__stars">
              {
                ratings.map((it) => {
                  return (
                    <Fragment key={it}>
                      <input
                        className="rating__input"
                        id={`star-${it}`}
                        type="radio"
                        name="rating"
                        value={it}
                        checked={it === rating}
                        onChange={onChange}
                        disabled={isDisabled}
                      />
                      <label
                        className="rating__label"
                        htmlFor={`star-${it}`}
                        style={{opacity: (it <= rating) ? 1 : 0.5}}
                      >
                        Rating {it}
                      </label>
                    </Fragment>
                  );
                })
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={comment}
              onChange={onChange}
              disabled={isDisabled}
              style={{opacity: isDisabled ? 0.3 : 1}}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={!isRatingValid || !isCommentValid || isDisabled ? true : false}
                style={{opacity: !isRatingValid || !isCommentValid || isDisabled ? 0.3 : 1}}
              >
                Post
              </button>
            </div>
          </div>
        </form>
        {
          formMessage
          &&
          <p style={{
            fontSize: `30px`,
            textAlign: `center`
          }}>{formMessage}</p>
        }
      </div>

    </section>
  );
};

AddReview.propTypes = {
  filmInfo: PropValidator.FILM_INFO,
  userInfo: PropValidator.USER_INFO,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isCommentValid: PropTypes.bool.isRequired,
  isRatingValid: PropTypes.bool.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onDisable: PropTypes.func.isRequired,
  onSendReview: PropTypes.func.isRequired,
  onSendFormSuccess: PropTypes.func.isRequired,
  formMessage: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    filmInfo: getFilm(state, ownProps.filmID),
    userInfo: getUserInfo(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSendReview(reviewInfo, id, onSendFormSuccess) {
    dispatch(sendReview(reviewInfo, id, onSendFormSuccess));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(withReviewForm(AddReview));
