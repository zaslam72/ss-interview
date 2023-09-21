import React, { useState } from "react";
import { Button } from "reactstrap";
import AddEditModal from "./add-edit-modal";
import { ColumnProps, RowProps } from "../types";
import { put } from "../api/helpers";

/*
  This component edits a given task.
  Upon filling out the updated form, it sends a request to our API to PUT `/api/todos/:id`.
  GAP: could be smarter about only updating the data if it's changed (lots of ways we could do this)
    - We could disable the button until an input is changed
    - We could ignore the API call if the input has not changed
    - We could check this on the backend also 
*/

interface EditTaskProps {
  columns: ColumnProps[];
  row: RowProps;
  setRows: (value: RowProps[]) => void;
}

const EditTask: React.FC<EditTaskProps> = ({ columns, row, setRows }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the page from refreshing; gather form data
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postBody = Object.fromEntries(data.entries());

    // Make a PUT request to our API to update the existing task
    // GAP: Need to add error handling
    await put(`todos/${row.id}/`, postBody).then((data) => {
      // If successful, close the modal and set the updated rows
      setModal(!modal);
      setRows(data.rows);
    });
  };

  return (
    <>
      <Button className="m-1" color="primary" onClick={toggle} outline>
        Edit
      </Button>
      <AddEditModal
        show={modal}
        columns={columns}
        row={row}
        toggle={toggle}
        handleSubmit={handleUpdate}
      />
    </>
  );
};

export default EditTask;
