import React, { useState } from 'react';
import { Button } from 'reactstrap';
import AddEditModal from "./add-edit-modal"
import { RowProps } from '../types';

/*
  This component adds a task.
  Upon filling out the form, it sends a request to our API to POST `/api/todos/`.
*/

// TODO BEFORE SUBMITTING: REFACTOR OUT API CALL INTO A REUSABLE METHOD!

interface AddTaskProps {
  setRows: (value: RowProps[]) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ setRows }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the page from refreshing; gather form data
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const status = formData.get("status")
    const text = formData.get("text")

    // Make a POST request to our API to create a new task
    try {
      const data: { "status": number, "rows": RowProps[] } = await (await fetch(`http://localhost:8000/api/todos/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "status": status,
          "text": text
        })
      })).json()
      if (data && data.rows) {
        // If successful, close the modal and set the updated rows
        setModal(!modal)
        setRows(data.rows)
      }
      // GAP: what should the behavior be if there is no data or data.rows returned?
    } catch (error) {
      // GAP: need to add better error handling & messaging
      console.log(error)
    }
  }

  return (
    <>
      <Button color="primary" onClick={toggle}>
        Add +
      </Button>
      <AddEditModal show={modal} toggle={toggle} handleSubmit={handleAdd} />
    </>
  );
}

export default AddTask;