import React from 'react';
import NavBarComponent from 'components/NavBarComponent/NavBarComponent';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm.js';
import Footer from 'components/Footer/Footer';
import text from 'utils/text';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-view">
      <NavBarComponent isGuest={false} inRegistration={true} />
      <div className="sign-up-wrapper">
        <div className="sign-up-msg">
          <p>{text.registrationForm.msg}</p>
        </div>
        <div className="sign-up-form">
          <RegistrationForm />
        </div>
      </div>
      <div className="signup-footer">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
