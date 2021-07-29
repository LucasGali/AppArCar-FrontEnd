import React, { useState } from 'react';
import './Profile.css';
import { Card, Button, Modal } from 'react-bootstrap';
import text from 'utils/text';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userData } from '../../actions/index';
import { HOME_DATA, SIGN_OFF } from '../../actions/types';
import { useHistory } from 'react-router-dom';
import Alert from '../Alert/Alert';
import EditUser from "../EditUser/EditUser"

const UserProfile = ({ user, isMain }) => {
  const [show, setShow] = useState(false);

  let history = useHistory();
  const dispatch = useDispatch();

  const deleteAccount = async () => {
    try {
      const headers = {
        Authorization: localStorage.getItem('jwt'),
      };
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/delete`,
        { email: user.email },
        { headers },
      );
      if (response.status === 200) {
        alert('Cuenta Borrada Exitosamente. Hasta la vista baby.');
        localStorage.clear();
        dispatch(userData(SIGN_OFF));
        history.push('/');
      }
    } catch (e) {
      console.error('Opps!', e);
    }
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

      //setData(response.data);
      dispatch(userData(HOME_DATA, response.data));
    } catch (e) {
      console.error('Opps!', e);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const EditVehicle = () => {
    const [form, setForm] = useState({
      vehicleType: undefined,
      vehiclePlate: '',
    });
    const [error, setError] = useState(false);

    const callError = () => {
      setError(false);
    };

    const SelectVehicle = () => {
      return (
        <select
          value={form.vehicleType}
          className='form-control'
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
    };

    const handleSubmitClick = (e) => {
      e.preventDefault();
      if (form.vehiclePlate.length >= 6 && form.vehicleType !== undefined) {
        sendDetailsToServer();
      } else {
        setError(true);
      }
    };
    const sendDetailsToServer = async () => {
      try {
        const headers = {
          Authorization: localStorage.getItem('jwt'),
        };
        const { vehicleType, vehiclePlate } = form;
        const response = await axios.patch(
          `${process.env.REACT_APP_SERVER_URL}/vehicle`,
          { email: user.email, vehicleType, vehiclePlate },
          { headers },
        );
        if (response.status === 200) {
          alert('Informacion de vehiculo actualizada exitosamente');
          handleClose();
          refreshData();
        }
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

    const handleChangeSelector = (e) => {
      setForm({
        ...form,
        vehicleType:
          e.target.value === text.vehicleOptions.title
            ? undefined
            : e.target.value,
      });
    };

    return (
      <Modal show={show} className="modal" onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="vehicle-edition">
          <div className="form-select">
            <SelectVehicle />
          </div>
          <div className="form-plate">
            <input
              data-testid="vehiclePlate"
              type='text'
              className='form-control'
              id='vehiclePlate'
              placeholder='Patente'
              value={form.vehiclePlate}
              onChange={handleChange}
              required
            />
          </div>
          {error ? (
            <Alert
              errorMessage={text.profile.updateError}
              hideError={callError}
            />
          ) : null}
            <Button variant="secondary" className="closebtn" onClick={handleClose}>
              {text.modal.close}
            </Button>
            <Button
              data-testid="saveVehicleBtn"
              variant="primary"
              className="savebtn"
              disabled={error}
              onClick={(handleClose, handleSubmitClick)}
            >
              {text.modal.save}
            </Button>
        </Modal.Body>
      </Modal>
    );
  };

  const MainProfile = () => (
    <Card className="main-card">
      <h1>{text.profile.title}</h1>
      <Card.Body>
        <br></br>
        <Card.Subtitle className="card-subtitle">
          {text.general.name}:
        </Card.Subtitle>
        <Card.Text className="card-text-items">{user.name}</Card.Text>
        <Card.Subtitle className="card-subtitle">
          {text.general.surname}:
        </Card.Subtitle>
        <Card.Text className="card-text-items">{user.surname}</Card.Text>
        <Card.Subtitle className="card-subtitle">
          {text.general.email}:
        </Card.Subtitle>
        <Card.Text>{user.email}</Card.Text>
        <br></br>
        <EditUser />
        <br></br>
        <Button className="btn btn-danger" onClick={deleteAccount}>
          {text.profile.delete}
        </Button>
      </Card.Body>
    </Card>
  );

  const VehicleProfile = () => (
    <Card className='main-card vehicle-card'>
      <h1>{text.profile.vehicleTitle}</h1>
      <Card.Body>
        <br></br>
        <Card.Subtitle className='card-subtitle'>
          {text.profile.vehiclePlate}:
        </Card.Subtitle>
        <Card.Text data-testid="plateData">{user.vehiclePlate}</Card.Text>
        <Card.Subtitle className='card-subtitle'>
          {text.profile.vehicleType}:
        </Card.Subtitle>
        <Card.Text data-testid="vehicleType">
          {user.vehicleType ? text.vehicleOptions[user.vehicleType] : '-'}
        </Card.Text>
        <Button data-testid="vehicleBtn" variant='primary' onClick={handleShow}>
          Editar Vehiculo
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <div className='profile-card'>
      {isMain ? <MainProfile /> : <VehicleProfile />}
      {show ? <EditVehicle /> : null}
    </div>
  );
};

export default UserProfile;
