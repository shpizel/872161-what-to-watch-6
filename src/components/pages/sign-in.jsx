import React from "react";

import Logo from "../logo";
import Footer from "../footer";
import PropTypes from "prop-types";


const SignIn = (props) => {
  const {message = ``} = props;
  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          {(message) ? (
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>
          ) : ``}
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
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
    </React.Fragment>
  );
};

SignIn.propTypes = {
  message: PropTypes.string
};

export default SignIn;
