import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*
  This is a simple component that renders a confirmation modal.
*/

interface ConfirmationModalProps {
  show: boolean;
  confirmationText: string;
  toggle: () => void;
  handleConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ show, toggle, confirmationText, handleConfirm }) => {

  return (
    <Modal isOpen={show} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm</ModalHeader>
      <ModalBody>
        <p>{confirmationText}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ConfirmationModal;