import React from 'react';
import Modal from 'react-modal';

// stateless component


const OptionModal = (props) => {
    // required isOpen and contentLabel, isOpen={false} hide the modal
    // !!(double exclamation) will convert string to true and !!undefined to false
    return (
        <Modal 
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.handleClearSelectOption}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>Ok</button>
        </Modal>
    );
} 

export default OptionModal;