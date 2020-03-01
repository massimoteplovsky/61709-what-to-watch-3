import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {connect} from 'react-redux';
import {changeFilmCounter} from '../../actions/action-creators/film-action-creators';

const ShowMore = ({filmCounter, handleFilmCounterChange, filteredFilms}) => {

  if (filmCounter > filteredFilms.length) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          handleFilmCounterChange(filteredFilms.length, filmCounter);
        }}
      >Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  filmCounter: PropValidator.FILM_COUNTER,
  handleFilmCounterChange: PropValidator.SHOW_MORE_FILMS,
  filteredFilms: PropValidator.FILMS
};

const mapStateToProps = ({filmCounter, filteredFilms}) => ({
  filmCounter,
  filteredFilms
});

const mapDispatchToProps = (dispatch) => ({
  handleFilmCounterChange(filteredFilmsCount, filmCounter) {
    dispatch(changeFilmCounter(filteredFilmsCount, filmCounter));
  }
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
