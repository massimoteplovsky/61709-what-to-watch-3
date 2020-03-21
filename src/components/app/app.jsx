import React, {PureComponent} from "react";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import history from "../../history.js";
import {PropTypes} from "prop-types";
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
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";
import withLoading from "../../hocs/with-loading/with-loading.js";
import {getAuthorizationStatus} from "../../selectors/user/user.js";
import {AUTH} from "../../consts.js";
import {loadAllFilms, loadPromoFilm} from "../../actions/action-creators/film-actions/film-actions.js";
import {checkAuth} from "../../actions/action-creators/user-actions/user-actions.js";

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
      authorizationStatus,
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
                authorizationStatus === AUTH ?
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
  error: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onChangeLoadingStatus: PropTypes.func.isRequired,
  onLoadData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
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
