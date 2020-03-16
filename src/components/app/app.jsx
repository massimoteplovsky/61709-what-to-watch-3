import React, {PureComponent} from "react";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import history from "../../history.js";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Movie from "../movie/movie.jsx";
import Signin from "../signin/signin.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import AddReview from "../add-review/add-review.jsx";
import MyList from "../my-list/my-list.jsx";
import ServerError from "../server-error/server-error.jsx";
import PageNotFound from "../page-not-found/page-not-found.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import withLoading from "../../hocs/with-loading/with-loading";
import {getAuthorizationStatus} from "../../selectors/user/user";
import {AUTH} from "../../consts";
import {loadAllFilms, loadPromoFilm} from '../../actions/action-creators/films/films';
import {checkAuth} from '../../actions/action-creators/user/user';

const WrappedVideoPlayer = withVideoPlayer(VideoPlayer);

class App extends PureComponent {

  componentDidMount() {
    const {
      onChangeLoadingStatus,
      onLoadData
    } = this.props;

    onLoadData().then(() => {
      onChangeLoadingStatus(false);
    });
  }

  render() {
    const {
      loading,
      isAuth,
      error,
    } = this.props;

    if (error) {
      return <ServerError/>;
    }

    if (loading) {
      return null;
    }

    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            exact
            component={Main}
          />
          <Route
            path="/login"
            exact
            render={() => {
              return (
                isAuth === AUTH ?
                  <Redirect to="/"/>
                  :
                  <Signin/>
              );
            }}
          />
          <Route
            path="/films/:id"
            exact
            render={(props) => {
              return <Movie {...props}/>;
            }}
          />
          <PrivateRoute
            exact
            path="/films/:id/review"
            render={(filmID) => {
              return <AddReview filmID={filmID}/>;
            }}
          />
          <Route
            path="/player/:id"
            exact
            render={(props) => {
              return (
                <WrappedVideoPlayer
                  isPlaying={true}
                  isMuted={false}
                  filmID={props.match.params.id}
                  isPreviewMode={false}
                />
              );
            }}
          />
          <PrivateRoute
            path="/myList"
            exact
            render={() => <MyList/>}
          />
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  error: PropValidator.REQUEST_ERROR,
  isAuth: PropValidator.IS_AUTH,
  onChangeLoadingStatus: PropValidator.CHANGE_LOAD_STATUS,
  onLoadData: PropValidator.ON_LOAD_DATA,
  loading: PropValidator.IS_LOADING,
  match: PropValidator.MATCH
};

const mapStateToProps = (state) => ({
  isAuth: getAuthorizationStatus(state),
  error: state.application.error
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    return Promise.all([
      dispatch(loadAllFilms()),
      dispatch(loadPromoFilm()),
      dispatch(checkAuth())
    ]);
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(withLoading(App));
