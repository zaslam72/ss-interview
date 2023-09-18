import React, { useEffect, useState } from "react";
import "./App.css";
import { Card, CardBody, CardTitle, Spinner } from "reactstrap";
import TaskList from "./components/task-list";
import AddTask from "./components/add-task";
import { ColumnProps, RowProps } from "./types";

/*
  Starting point for the frontend.
  Retrieves a list of tasks & columns and passes it to it's children.

  TODO: All of this logic shouldn't live in the App.tsx file. We should move this.
*/

function App() {
  const [rows, setRows] = useState<RowProps[]>([]);
  const [columns, setColumns] = useState<ColumnProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/todos/")
      .then((response) => response.json())
      .then((data) => {
        setRows(data.rows);
        setColumns(data.columns);
      });
  }, []);

  if (!columns.length) {
    // Loading spinner if we're still capturing column data from the API
    return (
      <div className="App">
        <Spinner
          color="primary"
          style={{
            margin: "10rem",
            height: "3rem",
            width: "3rem",
          }}
          type="grow"
        >
          Loading...
        </Spinner>
      </div>
    );
  } else {
    return (
      // Return the UI for the To Do List
      <div className="App">
        <Card className="m-4">
          <CardBody>
            <CardTitle
              className="d-flex align-content-center justify-content-between"
              tag="h3"
            >
              What's on the Agenda?
              <AddTask columns={columns} setRows={setRows} />
            </CardTitle>
            <TaskList rows={rows} setRows={setRows} columns={columns} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
