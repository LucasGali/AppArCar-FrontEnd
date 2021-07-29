import React, {useState} from "react";
import axios from "axios";
import "./SignInForm.css"
import iconSet from '../../icons.json';
import IcomoonReact from 'icomoon-react';
import { useHistory } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { userData } from '../../actions/index';
import { SIGN_IN } from '../../actions/types';
import Alert from '../Alert/Alert';
import text from 'utils/text';

const SignInForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const callError = () => {
    setErrorMessage(null);
  };

  const eye = (
    <IcomoonReact iconSet={iconSet} color="#444" size={25} icon="eye" />
  );

  const eyeBlocked = (
    <IcomoonReact iconSet={iconSet} color="#444" size={25} icon="eye-blocked" />
  );

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
     if (user.password.length && user.email.length) {
       getDetailsFromServer();
     } else {
       setErrorMessage('Mail o Password invalidos');
     }
  };

  const getDetailsFromServer = async () => {
    setErrorMessage(null);
    console.log('asd', user);
    const payload = { email: user.email, password: user.password };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signin`,
        payload,
      );
      dispatch(userData(SIGN_IN, response.data));
      if (response) history.push('/home');
    } catch (err) {
      console.log(err);
      setErrorMessage('Mail o Password invalidos');
    }
  };

   const SignInButton = () => {
     if (!errorMessage) {
       return (
         <button
           type="submit"
           className="btn btn-signin"
           data-testid="input-signin-submit"
           onClick={handleSubmitClick}
         >
           {text.signIn.sign}
         </button>
       );
     } else {
       return (
         <button
           type="submit"
           className="btn btn-signin"
           data-testid="input-signin-submit"
           onClick={handleSubmitClick}
           disabled
         >
           {text.signIn.sign}
         </button>
       );
     }
   };

  return (
    <div className="card signin-card mt-2" data-testid="signin-form">
      <IcomoonReact
        className="signinIconForm"
        iconSet={iconSet}
        color="#444"
        size={70}
        icon="location"
      />
      <form>
        <div className="form-group text-left">
          <label htmlFor="email">{text.general.email}</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            id="email"
            placeholder="Correo Electronico"
            onChange={handleChange}
            required
            data-testid="input-email"
            value={user.email}
          />
        </div>
        <div className="form-group text-left password-wrapper">
          <label htmlFor="password">{text.general.password}</label>
          <div className="eye-wrapper">
            <input
              type={passwordShown ? 'text' : 'password'}
              className="form-control password-box"
              id="password"
              placeholder="Contraseña"
              onChange={handleChange}
              value={user.password}
              data-testid="input-password"
            />
            <i className="eye-signin" onClick={togglePasswordVisiblity}>
              {passwordShown ? eye : eyeBlocked}
            </i>
          </div>
        </div>
        <Alert errorMessage={errorMessage} hideError={callError} />
        <div className="btn-wrapper">
          <SignInButton />
        </div>
      </form>
    </div>
  );
};

export default connect()(SignInForm);
