import React, { useState } from "react";
import { Button } from "reactstrap";
import ConfirmationModal from "./confirmation-modal";
import { RowProps } from "../types";

/*
  This component deletes a task.
  Upon clicking the delete button, it sends a request to our API to DELETE `/api/todos/:id`.
*/

// TODO BEFORE SUBMITTING: REFACTOR OUT API CALL INTO A REUSABLE METHOD!

interface DeleteTaskProps {
  rowId: string;
  setRows: (value: RowProps[]) => void;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ rowId, setRows }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleDelete = async () => {
    // Make a DELETE request to our API to delete the given task
    try {
      const data: { status: number; rows: RowProps[] } = await (
        await fetch(`http://localhost:8000/api/todos/${rowId}/`, {
          method: "DELETE",
        })
      ).json();
      // If successful, close the modal and set the updated rows
      if (data && data.rows) {
        setModal(!modal);
        setRows(data.rows);
      }
      // GAP: what should the behavior be if there is no data or data.rows returned?
    } catch (error) {
      // GAP: need to add better error handling & messaging
      console.log(error);
    }
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
