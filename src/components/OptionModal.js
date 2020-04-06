import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
   <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}                     //to handle some error       
   >
    <h3 className="modal__title">Selected Option</h3>
    { props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.closeModal} >
        Close
    </button>
   </Modal>
);

export default OptionModal;