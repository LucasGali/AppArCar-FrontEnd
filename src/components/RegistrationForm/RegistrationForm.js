import React, { useState } from 'react';
import axios from 'axios';
import iconSet from '../../icons.json'
import IcomoonReact from 'icomoon-react';
import { useHistory } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { userData } from '../../actions/index';
import { SIGN_UP } from '../../actions/types';
import Alert from '../Alert/Alert';
import text from 'utils/text';
import './RegistrationForm.css'

const RegistrationForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    vehicleType: undefined,
    vehiclePlate: '',
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setpasswordConfirmShown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const callError = () => {
    setErrorMessage(null)
  }

  const eye = (
    <IcomoonReact iconSet={iconSet} color="#444" size={25} icon="eye" />
  );

  const eyeBlocked = (
    <IcomoonReact iconSet={iconSet} color="#444" size={25} icon="eye-blocked" />
  );


  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const togglePasswordConfirmVisiblity = () => {
    setpasswordConfirmShown(passwordConfirmShown ? false : true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleChangeSelector = (e) => {
    setForm({
      ...form,
      vehicleType:
       e.target.value === text.vehicleOptions.title
            ? undefined
            : e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      vehicleType: undefined,
      vehiclePlate: '',
    })
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (form.password === form.confirmPassword) {
      sendDetailsToServer();
    } else {
      setErrorMessage('La contraseña es distinta a la confirmada');
    }
  };

  const sendDetailsToServer = async () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(form.email).toLowerCase());
    if (!isValid) {
      setErrorMessage('Por favor, completar el formulario');
      resetForm();
      return;
    }

    if (form.password.length < 8) {
      setErrorMessage('Por favor, completar el formulario');
      resetForm();
      return;
    }

    if (form.vehiclePlate.length < 6) {
      setErrorMessage('Por favor, completar el formulario');
      resetForm();
      return;
    }

    if (form.vehicleType === undefined) {
      setErrorMessage('Por favor, completar el formulario');
      resetForm();
      return;
    }

    if (form.password.length >= 8 && isValid) {
      setErrorMessage(null);
      const { email, password, name, surname, vehicleType, vehiclePlate } = form;
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/signup`,
          {
            email,
            password,
            name,
            surname,
            vehicleType,
            vehiclePlate,
          },
        );
        dispatch(userData(SIGN_UP, response.data));
        if (response) history.push('/home');
      } catch (e) {
        console.error(e)
        setErrorMessage('El mail ya existe');
      }
    }
  };

  const RegistrationBtn = () => {
    if (!errorMessage) {
      return (
        <button
          data-testid="submit-registration"
          type="submit"
          className="btn btn-registration"
          onClick={handleSubmitClick}
        >
          {text.registrationForm.btn}
        </button>
      );
    } else {
      return (
        <button
          data-testid="submit-registration"
          type="submit"
          className="btn btn-registration"
          onClick={handleSubmitClick}
          disabled
        >
          {text.registrationForm.btn}
        </button>
      );
    }
  }

  const vehicleOptions = [
    {
      text: text.vehicleOptions.title,
      value: undefined,
    },
    {
      text: text.vehicleOptions.motorbike,
      value: 'motorbike',
    },
    {
      text: text.vehicleOptions.car,
      value: 'car',
    },
    {
      text: text.vehicleOptions.truck,
      value: 'truck',
    },
  ];

  const SelectVehicle = () => {
    return (
      <select
        value={form.vehicleType}
        className="form-control"
        data-testid="vehicle-select"
        onChange={handleChangeSelector}
        required
      >
        {vehicleOptions.map((e) => (
          <option key={e.text} value={e.value}>
            {e.text}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className="card register-card mt-2">
      <IcomoonReact
        className="locationIconForm"
        iconSet={iconSet}
        color="#444"
        size={70}
        icon="location"
      />
      <form>
        <div className="form-group text-left">
          <label htmlFor="InputName">{text.general.name}</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingresar Nombre"
            data-testid="input-name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="InputSurname">{text.general.surname}</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            data-testid="input-surname"
            placeholder="Ingresar Apellido"
            value={form.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="InputMail">{text.general.email}</label>
          <input
            type="email"
            data-testid="input-email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Ingresar email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="InputPassword">
            {text.registrationForm.password}
          </label>
          <div className="eye-wrapper">
            <input
              type={passwordShown ? 'text' : 'password'}
              data-testid="input-password"
              className="form-control password-box"
              id="password"
              placeholder="Ingresar Contraseña"
              value={form.password}
              onChange={handleChange}
            />
            <i className="eye-signup" onClick={togglePasswordVisiblity}>
              {passwordShown ? eye : eyeBlocked}
            </i>
          </div>
        </div>
        <div className="form-group text-left">
          <label htmlFor="InputConfirmPassword">
            {text.registrationForm.confirmPsw}
          </label>
          <div className="eye-wrapper">
            <input
              type={passwordConfirmShown ? 'text' : 'password'}
              data-testid="input-password-confirm"
              className="form-control password-box"
              id="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <i className="eye-signup" onClick={togglePasswordConfirmVisiblity}>
              {passwordConfirmShown ? eye : eyeBlocked}
            </i>
          </div>
        </div>
        <div className="form-group text-left">
          <label htmlFor="InputvehicleType">{text.general.vehicle}</label>
          <SelectVehicle />
        </div>
        <div className="form-group text-left">
          <label htmlFor="InputvehiclePlate">{text.general.plate}</label>
          <input
            type="text"
            className="form-control"
            data-testid="input-vehicleplate"
            id="vehiclePlate"
            placeholder="Patente"
            value={form.vehiclePlate}
            onChange={handleChange}
            required
          />
        </div>
        <Alert errorMessage={errorMessage} hideError={callError} />
        <div className="btn-reg-wrapper">
          <RegistrationBtn />
        </div>
      </form>
    </div>
  );
};

export default connect()(RegistrationForm);
