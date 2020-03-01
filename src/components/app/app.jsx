import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {PropValidator} from "../../prop-validator/prop-validator";
import Main from "../main/main.jsx";
import Movie from "../movie/movie.jsx";
import withActiveFilm from '../../hocs/with-active-film/with-active-film';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const WrappedMovie = withActiveItem(Movie);
const WrappedMain = withActiveItem(Main);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._renderApp = this._renderApp.bind(this);
  }

  _renderApp() {
    const {
      promoFilmInfo,
      activeFilm,
      onChangeActiveFilm
    } = this.props;

    if (activeFilm) {
      return (
        <WrappedMovie
          filmInfo={activeFilm}
          onTitleClick={onChangeActiveFilm}
        />
      );
    }

    return (
      <WrappedMain
        promoFilmInfo={promoFilmInfo}
        onTitleClick={onChangeActiveFilm}
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
  activeFilm: PropValidator.FILM_INFO,
  onChangeActiveFilm: PropValidator.CHANGE_ACTIVE_FILM
};

export {App};
export default withActiveFilm(App);
