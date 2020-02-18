import React, {PureComponent} from 'react';
import {PropValidator} from "../../prop-validator/prop-validator";
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._timerID = null;
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(filmID) {
    this._timerID = setTimeout(() => {
      this.setState({activeCard: filmID});
    }, 1000);
  }

  handleMouseLeave() {
    clearTimeout(this._timerID);
    this.setState({activeCard: null});
  }

  render() {
    const {films, onTitleClick} = this.props;
    const {activeCard} = this.state;

    if (films.length === 0) {
      return (
        <h2>Movie list is empty</h2>
      );
    }

    return (
      <div className="catalog__movies-list">
        {
          films.map((film) => {
            return (
              <MovieCard
                key={film.id}
                film={film}
                isPlaying={film.id === activeCard}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onTitleClick={onTitleClick}
              />
            );
          })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropValidator.FILMS,
  onTitleClick: PropValidator.TITLE_CLICK
};

export default MovieList;
