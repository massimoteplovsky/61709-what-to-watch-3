import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AUTH} from "../../consts.js";
import {getAuthorizationStatus} from "../../selectors/user/user.js";
import {PropTypes} from "prop-types";

const PrivateRoute = ({authorizationStatus, path, exact, computedMatch, render}) => {
  const {id} = computedMatch.params;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AUTH ?
            render(id)
            :
            <Redirect to="/login"/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  computedMatch: PropTypes.object
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
