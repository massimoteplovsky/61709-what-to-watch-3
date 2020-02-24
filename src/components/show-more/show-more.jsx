import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {connect} from 'react-redux';
import {changeFilmCounter} from '../../actions/action-creators/film-action-creators';
import {FILM_TO_SHOW} from '../../consts';

const ShowMore = ({filmCounter, handleFilmCounterChange}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          handleFilmCounterChange(filmCounter + FILM_TO_SHOW);
        }}
      >Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  filmCounter: PropValidator.FILM_COUNTER,
  handleFilmCounterChange: PropValidator.SHOW_MORE_FILMS
};

const mapStateToProps = ({filmCounter}) => ({
  filmCounter
});

const mapDispatchToProps = (dispatch) => ({
  handleFilmCounterChange(count) {
    dispatch(changeFilmCounter(count));
  }
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
