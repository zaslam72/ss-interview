import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";
import { ColumnProps, RowProps } from "../types";
import TaskInput from "./task-input";

/*
  This component adds and edits tasks through a form within a modal.
*/

interface AddEditModalProps {
  show: boolean;
  columns: ColumnProps[];
  row?: RowProps;
  toggle: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AddEditModal: React.FC<AddEditModalProps> = ({
  show,
  columns,
  row,
  toggle,
  handleSubmit,
}) => {
  return (
    <Modal isOpen={show} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {row ? "Edit Task" : "Add a Task"}
      </ModalHeader>
      <ModalBody>
        <Form id="task-form" onSubmit={handleSubmit}>
          {/* Display inputs for each column provided */}
          {columns?.map((column, idx) => (
            <TaskInput
              key={`${column.id}-${idx}-form-group`}
              column={column}
              row={row}
            />
          ))}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button form="task-form" type="submit" color="primary">
          {row ? "Save Changes" : "Add"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddEditModal;
