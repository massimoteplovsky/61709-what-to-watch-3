import React, {PureComponent} from "react";
import {Router, Switch, Route} from "react-router-dom";
import history from "../../history.js";
import {PropValidator} from "../../prop-validator/prop-validator";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Movie from "../movie/movie.jsx";
import Signin from "../signin/signin.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import ServerError from "../server-error/server-error.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import {getFilms} from "../../selectors/films/films.js";
import {getFilm} from "../../helpers/helpers";

const WrappedVideoPlayer = withVideoPlayer(VideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {error, films} = this.props;

    if (error) {
      return (<ServerError/>);
    }

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/login" component={Signin}/>
          <Route exact path="/film/:id" component={Movie}/>
          <Route exact path="/player/:id" render={(props) => {
            const {id} = props.match.params;
            const film = getFilm(films, id);

            return (
              <WrappedVideoPlayer
                isPlaying={true}
                isMuted={false}
                src={film.videoLink}
                poster={film.backgroundImage}
                isPreviewMode={false}
              />
            );
          }}/>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  films: PropValidator.FILMS,
  error: PropValidator.REQUEST_ERROR
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  error: state.application.error
});

export {App};
export default connect(mapStateToProps)(App);
