import React from 'react';
import {connect} from 'react-redux';
import {NO_AUTH, BASE_URL} from '../../consts';
import {PropValidator} from '../../prop-validator/prop-validator';
import {Link} from "react-router-dom";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const Header = ({isAuth, userInfo}) => {

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link className="logo__link" to={`/`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        {
          isAuth === NO_AUTH ?
            <Link className="user-block__link" to={`/login`}>Sign in</Link>
            :
            <div className="user-block__avatar">
              <img src={userInfo ? `${BASE_URL}${userInfo.avatarUrl}` : null} alt={userInfo ? userInfo.name : null} width="63" height="63" />
            </div>
        }
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.authorizationStatus,
  userInfo: state.user.userInfo
});

Header.propTypes = {
  isAuth: PropValidator.IS_AUTH,
  userInfo: PropValidator.USER_INFO
};

export {Header};
export default connect(mapStateToProps)(withActiveItem(Header));
