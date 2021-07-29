import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import text from 'utils/text';
import axios from 'axios';
import { userData } from '../../actions/index';
import { HOME_DATA } from '../../actions/types';
import iconSet from '../../icons.json';
import IcomoonReact from 'icomoon-react';
import { useDispatch } from 'react-redux';
import Alert from '../Alert/Alert';
import "./EditUser.css"

const EditUser = ({ user, updateInfo }) => {
  const [show, setShow] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setpasswordConfirmShown] = useState(false);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: undefined,
    surname: undefined,
    newEmail: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(false);

  const eye = (
    <IcomoonReact iconSet={iconSet} color="#444" size={23} icon="eye" />
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

  const refreshData = async () => {
    try {
      const headers = {
        Authorization: localStorage.jwt,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/profile`,
        { email: localStorage.getItem('email') },
        { headers },
      );

      dispatch(userData(HOME_DATA, response.data));
    } catch (e) {
      console.error('Opps!', e);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleClose = () => {
    setShow(false);
    setForm({
      name: undefined,
      surname: undefined,
      newEmail: '',
      password: '',
      confirmPassword: '',
    });
  }
  const handleShow = () => setShow(true);


  const callError = () => {
    setError(false);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (form.password === form.confirmPassword && form.name !== undefined
      && form.surname !== undefined && form.password.length >= 8 && form.name.length !== 0 && form.surname.length !== 0) {
      sendDetailsToServer();
    } else {
      setError(true);
    }
  };

  const sendDetailsToServer = async () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(form.newEmail).toLowerCase());
    if(!isValid) {
      setError(true);
      return;
    }

    if (form.password.length < 8) {
      setError(true);
      return;
    }

    if (form.password.length >= 8 && isValid) {
      setError(false);
      try {
        const headers = {
          Authorization: localStorage.getItem('jwt'),
        };
        const { newEmail, password, name, surname } = form;
        const response = await axios.patch(
          `${process.env.REACT_APP_SERVER_URL}/update_users`,
          { email: localStorage.getItem('email'), newEmail, password, name, surname },
          { headers },
        );
        if (response.status === 200) {
          alert(text.profile.updateCorrect);
          handleClose();
          refreshData();
          localStorage.setItem('email', form.newEmail);
          updateInfo()
        }
      } catch (e) {
        console.error(e);
        setError(true);
      }
    }
  };

  return (
    <div>
      <Button data-testid="editBtn" variant="primary" onClick={handleShow}>
        Editar Usuario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header-profile" closeButton>
          <span id="modal-header-profile-span">
            Ingrese Nuevos Datos de Usuario
          </span>
        </Modal.Header>
        <Modal.Body className="form-group text-left">
          <form>
            <div className="form-group text-left">
              <label htmlFor="InputName">{text.general.name}</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingresar Nombre"
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
                id="newEmail"
                aria-describedby="emailHelp"
                placeholder="Ingresar email"
                value={form.newEmail}
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
                <i className="eye-edit" onClick={togglePasswordVisiblity}>
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
                <i
                  className="eye-edit"
                  onClick={togglePasswordConfirmVisiblity}
                >
                  {passwordConfirmShown ? eye : eyeBlocked}
                </i>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {error ? (
            <Alert
              errorMessage={text.profile.updateError}
              hideError={callError}
            />
          ) : null}
          <Button
            data-testid="closeUserBtn"
            variant="secondary"
            onClick={handleClose}
          >
            {text.modal.close}
          </Button>
          <Button
            data-testid="submit-edition"
            varian="primary"
            className="btn btn-primary"
            disabled={error}
            onClick={(handleClose, handleSubmitClick)}
          >
            {text.modal.save}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser;
