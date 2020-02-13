import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {FilmPropType} from "../../prop-validator/prop-validator";
import Main from "../main/main.jsx";
import Movie from "../movie/movie.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmInfo: null
    };

    this._renderApp = this._renderApp.bind(this);
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(event, film) {
    event.preventDefault();
    this.setState({filmInfo: film});
  }

  _renderApp() {
    const {promoFilmInfo, films} = this.props;
    const {filmInfo} = this.state;

    if (filmInfo) {
      return (
        <Movie filmInfo={filmInfo}/>
      );
    }

    return (
      <Main
        promoFilmInfo={promoFilmInfo}
        films={films}
        onTitleClick={this._handleTitleClick}
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
  promoFilmInfo: FilmPropType.PROMO_FILM_INFO,
  films: FilmPropType.FILMS
};

export default App;
