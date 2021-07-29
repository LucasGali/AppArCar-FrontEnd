import React, { useState, useEffect } from 'react';

function Alert(props) {
  const [modalDisplay, toggleDisplay] = useState('none');
  const openModal = () => {
    toggleDisplay('block');
  };
  const closeModal = () => {
    toggleDisplay('none');
    props.hideError(null);
  };
  useEffect(() => {
    if (props.errorMessage !== null) {
      openModal();
    } else {
      closeModal();
    }
  });

  return (
    <div
      className={'alert alert-danger alert-dismissable mt-4 alert-msg'}
      role="alert"
      id="alertPopUp"
      style={{ display: modalDisplay }}
    >
      <div className="d-flex">
        <span data-testid="alert-msg">{props.errorMessage}</span>
        <button
          type="button"
          className="close ml-2"
          aria-label="Close"
          data-testid="alert-btn"
          onClick={() => closeModal()}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Alert;
