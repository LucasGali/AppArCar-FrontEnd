import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import text from 'utils/text';
import axios from 'axios';
import { userData } from '../../actions/index';
import { HOME_DATA } from '../../actions/types';
import iconSet from '../../icons.json';
import IcomoonReact from 'icomoon-react';
import { useDispatch } from 'react-redux';

const EditUser = ({ user }) => {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setpasswordConfirmShown] = useState(false);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    surname: '',
    newEmail: '',
    password: '',
    confirmPassword: '',
  });

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (form.password === form.confirmPassword) {
      sendDetailsToServer();
    } else {
      setErrorMessage(text.registrationForm.error_confirm);
    }
  };

  const sendDetailsToServer = async () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(form.email).toLowerCase());
    if (!isValid) {
      setErrorMessage(text.registrationForm.error_nodata);
      return;
    }

    if (form.password.length < 8) {
      setErrorMessage(text.registrationForm.error_nodata);
      return;
    }

    if (form.password.length >= 8 && isValid) {
      setErrorMessage(null);
      try {
        const headers = {
          Authorization: localStorage.getItem('jwt'),
        };
        const { newEmail, password, name, surname } = form;
        const response = await axios.patch(
          `${process.env.REACT_APP_SERVER_URL}/user`,
          { email: user.email, newEmail, password, name, surname },
          { headers },
        );
        if (response.status === 200) {
          alert(text.profile.updateCorrect);
          handleClose();
          refreshData();
        }
      } catch (e) {
        console.error(e);
        setErrorMessage(text.registrationForm.error_email);
      }
    }
  };

  const EditInfo = () => {
    if (!errorMessage) {
      return (
        <button
          data-testid="submit-edition"
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Editar Informacion
        </button>
      );
    } else {
      return (
        <button
          data-testid="submit-edition"
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
          disabled
        >
          Editar Informacion
        </button>
      );
    }
  };

  return (
    <div>
      <Button data-testid="editBtn" variant="primary" onClick={handleShow}>
        Editar Usuario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Ingrese Nuevos Datos de Usuario</Modal.Header>
        <Modal.Body className="form-group text-left">
          <form>
            <div className="form-group text-left">
              <label htmlFor="InputName">{text.general.name}</label>
              <input
                data-testid="nameInput"
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
                data-testid="surnameInput"
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
                <i
                  className="eye-signup"
                  onClick={togglePasswordConfirmVisiblity}
                >
                  {passwordConfirmShown ? eye : eyeBlocked}
                </i>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button data-testid="closeUserBtn" variant="secondary" onClick={handleClose}>
            {text.modal.close}
          </Button>
          <EditInfo>
            {text.modal.save}
          </EditInfo>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser;
