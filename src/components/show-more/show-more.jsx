import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {connect} from 'react-redux';
import {incrementFilmCounter} from '../../actions/action-creators/films/films';
import {getFilmCounter, getFilteredFilms} from '../../selectors/films/films';

const ShowMore = ({
  filmCounter,
  filteredFilms,
  handleFilmCounterIncrement,
}) => {

  if (filmCounter > filteredFilms.length) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          handleFilmCounterIncrement();
        }}
      >Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  filmCounter: PropValidator.FILM_COUNTER,
  handleFilmCounterIncrement: PropValidator.SHOW_MORE_FILMS,
  filteredFilms: PropValidator.FILMS
};

const mapStateToProps = (state) => ({
  filmCounter: getFilmCounter(state),
  filteredFilms: getFilteredFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleFilmCounterIncrement() {
    dispatch(incrementFilmCounter());
  }
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
