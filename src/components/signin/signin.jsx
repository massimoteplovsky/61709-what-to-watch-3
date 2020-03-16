import React, {PureComponent, createRef} from "react";
import Footer from "../footer/footer.jsx";
import {connect} from "react-redux";
import {PropValidator} from "../../prop-validator/prop-validator";
import {validateEmail} from "../../helpers/helpers";
import {login} from "../../actions/action-creators/user/user";
import {Link} from "react-router-dom";
import withSigninForm from "../../hocs/with-sigin-form/with-sugnin-form";

class Signin extends PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = createRef();
    this._passwordRef = createRef();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const {sendForm, onChangeFormMessage} = this.props;
    const email = this._loginRef.current;
    const password = this._passwordRef.current;

    if (!validateEmail(email.value)) {
      onChangeFormMessage(`Please enter a valid email address`, email.name);
      return;
    }

    if (!password.value.trim()) {
      onChangeFormMessage(`Please enter a valid password`, password.name);
      return;
    }

    sendForm({
      email: email.value,
      password: password.value
    });
  }

  render() {
    const {formError, formMessage, errorField} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link className="logo__link" to={`/`}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this.handleFormSubmit}
          >

            {
              formError ?
                <div className="sign-in__message">
                  <p>{formMessage}</p>
                </div>
                :
                null
            }

            <div className="sign-in__fields">
              <div className={`sign-in__field ${errorField === `user-email` ? `sign-in__field--error` : null}`}>
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={this._loginRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className={`sign-in__field ${errorField === `user-password` ? `sign-in__field--error` : null}`}>
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref={this._passwordRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendForm(data) {
    dispatch(login(data));
  }
});

Signin.propTypes = {
  sendForm: PropValidator.SEND_FROM,
  onChangeFormMessage: PropValidator.CHANGE_FORM_MESSAGE,
  formError: PropValidator.FROM_ERROR,
  formMessage: PropValidator.FORM_MESSAGE,
  errorField: PropValidator.ERROR_FIELD
};

export {Signin};
export default connect(null, mapDispatchToProps)(withSigninForm(Signin));
