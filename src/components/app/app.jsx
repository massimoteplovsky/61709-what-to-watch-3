import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from 'react-redux';
import Main from "../main/main.jsx";
import Movie from "../movie/movie.jsx";
import Signin from "../signin/signin.jsx";
import ServerError from '../server-error/server-error.jsx';
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
      filmID,
      onChangeActiveFilm,
    } = this.props;

    if (filmID > 0) {
      return (
        <WrappedMovie
          filmID={filmID}
          onTitleClick={onChangeActiveFilm}
        />
      );
    }

    return (
      <WrappedMain
        onTitleClick={onChangeActiveFilm}
      />
    );
  }

  render() {
    const {error} = this.props;

    if (error) {
      return (<ServerError/>);
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/signin">
            <Signin/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  filmID: PropValidator.ITEM_ID,
  onChangeActiveFilm: PropValidator.CHANGE_ACTIVE_FILM,
  error: PropValidator.REQUEST_ERROR
};

const mapStateToProps = (state) => ({
  error: state.application.error
});

export {App};
export default connect(mapStateToProps)(withActiveFilm(App));
