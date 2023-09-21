import React, { useState } from "react";
import { Button } from "reactstrap";
import AddEditModal from "./add-edit-modal";
import { ColumnProps, RowProps } from "../types";
import { post } from "../api/helpers";

/*
  This component adds a task.
  Upon filling out the form, it sends a request to our API to POST `/api/todos/`.
*/

interface AddTaskProps {
  columns: ColumnProps[];
  setRows: (value: RowProps[]) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ columns, setRows }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the page from refreshing; gather form data
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postBody = Object.fromEntries(data.entries());

    // Make a POST request to our API to create a new task
    // GAP: Need to add error handling
    await post("todos/", postBody).then((data) => {
      // If successful, close the modal and set the updated rows
      setModal(!modal);
      setRows(data.rows);
    });
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>
        Add +
      </Button>
      <AddEditModal
        columns={columns}
        show={modal}
        toggle={toggle}
        handleSubmit={handleAdd}
      />
    </>
  );
};

export default AddTask;
