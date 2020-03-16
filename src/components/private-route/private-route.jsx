import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AUTH} from "../../consts";
import {getAuthorizationStatus} from "../../selectors/user/user";
import {PropValidator} from "../../prop-validator/prop-validator";

const PrivateRoute = ({isAuth, path, exact, computedMatch, render}) => {
  const {id} = computedMatch.params;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          isAuth === AUTH ?
            render(id)
            :
            <Redirect to="/login"/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropValidator.IS_AUTH,
  exact: PropValidator.EXACT,
  path: PropValidator.PATH,
  render: PropValidator.RENDER,
  computedMatch: PropValidator.MATCH
};

const mapStateToProps = (state) => ({
  isAuth: getAuthorizationStatus(state)
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
