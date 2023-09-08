import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

/*
  This component adds and edits tasks through a form within a modal.

  GAP: Theoretically, we could split this out into a Modal component and a separate Form component
  GAP: Due to time constraints, I hardcoded the form to only handle task & status.
    We could go further and build a form conditionally from the columns provided on the sheet.
    We could have the form read from the "PICKLIST" options from the columns API.
*/

interface AddEditModalProps {
  show: boolean;
  row?: {
    id: string;
    status: string;
    text: string;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  toggle: () => void;
}

const AddEditModal: React.FC<AddEditModalProps> = ({ show, row, toggle, handleSubmit }) => {
  return (
    <Modal isOpen={show} toggle={toggle}>
      <ModalHeader toggle={toggle}>{row ? "Edit Task" : "Add a Task"}</ModalHeader>
      <ModalBody>
        <Form id="task-form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="status">
              Status
            </Label>
            <Input
              id="status"
              name="status"
              type="select"
              defaultValue={row?.status}
            >
              <option value="Not Started">
                Not Started
              </option>
              <option value="In Progress">
                In Progress
              </option>
              <option value="Complete">
                Complete
              </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="text">
              Task
            </Label>
            <Input
              id="text"
              name="text"
              type="textarea"
              defaultValue={row?.text}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button form="task-form" type="submit" color="primary">
          {row ? "Edit" : "Add"}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddEditModal;