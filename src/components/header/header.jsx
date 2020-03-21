import React from "react";
import {connect} from "react-redux";
import {NO_AUTH, BASE_URL} from "../../consts.js";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";
import history from "../../history.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getAuthorizationStatus} from "../../selectors/user/user.js";

const Header = ({authorizationStatus, userInfo, additionalClass}) => {

  return (
    <header className={`page-header ${additionalClass}`}>
      <div className="logo">
        <Link className="logo__link" to={`/`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        {
          authorizationStatus === NO_AUTH ?
            <Link className="user-block__link" to={`/login`}>Sign in</Link>
            :
            <div className="user-block__avatar">
              <img
                src={userInfo ? `${BASE_URL}${userInfo.avatarUrl}` : null}
                alt={userInfo ? userInfo.name : null} width="63" height="63"
                onClick={() => history.push(`/myList`)}
              />
            </div>
        }
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: state.user.userInfo
});

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropValidator.USER_INFO,
  additionalClass: PropTypes.string.isRequired
};

export {Header};
export default connect(mapStateToProps)(withActiveItem(Header));
