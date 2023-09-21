import React, { useState } from "react";
import { Button } from "reactstrap";
import ConfirmationModal from "./confirmation-modal";
import { RowProps } from "../types";
import { destroy } from "../api/helpers";

/*
  This component deletes a task.
  Upon clicking the delete button, it sends a request to our API to DELETE `/api/todos/:id`.
*/

interface DeleteTaskProps {
  rowId: number;
  setRows: (value: RowProps[]) => void;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ rowId, setRows }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDelete = async () => {
    // Make a DELETE request to our API to delete the given task
    // GAP: Need to add error handling
    await destroy(`todos/${rowId}/`).then((data) => {
      // If successful, close the modal and set the updated rows
      setModal(!modal);
      setRows(data.rows);
    });
  };

  return (
    <>
      <Button className="m-1" color="danger" onClick={toggle}>
        Delete
      </Button>
      <ConfirmationModal
        show={modal}
        toggle={toggle}
        handleConfirm={handleDelete}
        confirmationText={"Are you sure you want to delete this task?"}
      />
    </>
  );
};

export default DeleteTask;
