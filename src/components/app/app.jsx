import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from 'react-redux';
import {changeFilmGenre, getFilmsByGenre} from '../../actions/action-creators/film-action-creators';
import Main from "../main/main.jsx";
import Movie from "../movie/movie.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmInfo: null
    };

    this._renderApp = this._renderApp.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(event, film) {
    event.preventDefault();
    this.setState({filmInfo: film});
  }

  _renderApp() {
    const {
      promoFilmInfo,
      films,
      filteredFilms,
      actualGenre,
      onChangeFilmGenre
    } = this.props;
    const {filmInfo} = this.state;

    if (filmInfo) {
      return (
        <Movie
          filmInfo={filmInfo}
          films={films}
          onTitleClick={this.handleTitleClick}
        />
      );
    }

    return (
      <Main
        promoFilmInfo={promoFilmInfo}
        films={films}
        filteredFilms={filteredFilms}
        actualGenre={actualGenre}
        onTitleClick={this.handleTitleClick}
        onChangeFilmGenre={onChangeFilmGenre}
      />
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  promoFilmInfo: PropValidator.PROMO_FILM_INFO,
  films: PropValidator.FILMS,
  filteredFilms: PropValidator.FILMS,
  actualGenre: PropValidator.GENRE,
  onChangeFilmGenre: PropValidator.CHANGE_GENRE,
};

const mapStateToProps = ({films, actualGenre, filteredFilms}) => ({
  films,
  filteredFilms,
  actualGenre
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilmGenre(genre, films) {
    dispatch(changeFilmGenre(genre));
    dispatch(getFilmsByGenre(genre, films));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
