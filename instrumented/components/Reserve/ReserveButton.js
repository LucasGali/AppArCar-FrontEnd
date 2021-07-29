import React, { useState } from 'react';
import Reserva from 'components/Reserve/Reserva'
import axios from 'axios';
import text from 'utils/text';
import { Button } from 'react-bootstrap';

const ReserveButton = ({ selectedParking }) => {
  const [showCancel, setShowCancel] = useState(false);
  const [showReserve, setShowReserve] = useState(false);
  const [remember, setRemember] = useState(false)

  const closeModalHandler = () => {
    setShowCancel(false);
    setShowReserve(false);
  }

  const reserveSpot = async () => {
    try {
      const headers = {
        Authorization: localStorage.jwt,
      };
      await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/parkings/reserve`,
        { id: selectedParking },
        { headers },
      );
      setRemember(true);
      setShowReserve(true);
    } catch (e) {
      console.error('Oopps!', e);
      alert(text.modal.alert);
    }
  };

  const cancelSpot = async () => {
    try {
      const headers = {
        Authorization: localStorage.jwt,
      };
      await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/parkings/cancel`,
        { id: selectedParking },
        { headers },
      );
      setShowReserve(false);
      setShowCancel(true);
      setRemember(false);
    } catch (e) {
      console.error('Oopps!', e);
      alert(text.modal.alert);
    }
  };

  const Cancel = () => (
    <div>
      {showCancel ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <Button
        onClick={cancelSpot}
        className="btn btn-danger btn-cancel-reserve"
      >
        {text.parkingTable.columns.cancel}
      </Button>    
    </div>
  );

  const Reserve = () => (
    <div>
      {showReserve ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <Button onClick={reserveSpot} className="btn-openModal">
        {text.parkingTable.columns.reserve}
      </Button>
    </div>
  );
  

  const ModalToShow = () => {
    if (showCancel)
      return (
        <Reserva
          show={showCancel}
          close={closeModalHandler}
          modalTitle={text.navbar.app}
          modalText={text.modal.textCancel}
        />
      );
    else if (showReserve)
      return (
        <Reserva
          show={showReserve}
          close={closeModalHandler}
          modalTitle={text.navbar.app}
          modalText={text.modal.textReserve}
        />
      );
    return null
  }

  return (
    <>
      {remember ? <Cancel /> : <Reserve />}
      <ModalToShow />
    </>
  );
};
export default ReserveButton;
