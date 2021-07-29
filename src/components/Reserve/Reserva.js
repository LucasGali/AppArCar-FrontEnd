import React from 'react';
import './Reserva.css';
import text from 'utils/text';

const Reserva = ({ show, close, modalTitle, modalText }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? 'translate(0vh)' : 'translate(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      <div className="modal-header">
        <h5>{modalTitle}</h5>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h6>{modalText}</h6>
        </div>
        <div>
          <button onClick={close} className="btn-cancel">
            {text.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Reserva;
