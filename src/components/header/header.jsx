import React from 'react';
import {connect} from 'react-redux';
import {NO_AUTH} from '../../consts';
import {PropValidator} from '../../prop-validator/prop-validator';
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Signin from "../signin/signin.jsx";

const Header = ({isAuth, userInfo, onChangeActiveItemIndex, activeItemIndex}) => {

  if (activeItemIndex > 0) {
    return (
      <Signin
        onChangeActiveItemIndex={onChangeActiveItemIndex}
      />
    );
  }

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        {
          isAuth === NO_AUTH ?
            <a href="#" onClick={(event) => {
              event.preventDefault();
              onChangeActiveItemIndex(1);
            }}>Sign in</a>
            :
            <div className="user-block__avatar">
              <img src={userInfo ? userInfo.avatarUrl : null} alt={userInfo ? userInfo.name : null} width="63" height="63" />
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
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM,
  userInfo: PropValidator.USER_INFO
};

export {Header};
export default connect(mapStateToProps)(withActiveItem(Header));
