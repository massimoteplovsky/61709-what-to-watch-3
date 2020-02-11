import React, {PureComponent} from 'react';
import {FilmPropType} from "../../prop-validator/prop-validator";
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
  }

  _handleMouseEnter(id) {
    this.setState({
      activeCard: id
    });
  }

  render() {
    const {films, onTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          films.map((film) => {
            return (
              <MovieCard
                key={film.id}
                film={film}
                onMouseEnter={this._handleMouseEnter}
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
  films: FilmPropType.FILMS,
  onTitleClick: FilmPropType.TITLE_CLICK
};

export default MovieList;
