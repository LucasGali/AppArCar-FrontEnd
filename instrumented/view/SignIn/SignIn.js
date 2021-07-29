import React from 'react';
import NavBarComponent from 'components/NavBarComponent/NavBarComponent';
import SignInForm from 'components/SignInForm/SignInForm';
import Footer from 'components/Footer/Footer';
import text from 'utils/text';
import "./SignIn.css"

const SignIn = () => {
  return (
    <div className="signin-view">
      <NavBarComponent isGuest={false} inRegistration={true} />
      <div className="sign-in-wrapper">
        <div className="sign-in-msg">
          <p>{text.signIn.msg}</p>
        </div>
        <div className="sign-in-form">
          <SignInForm />
        </div>
      </div>
      <div className="signin-footer">
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
