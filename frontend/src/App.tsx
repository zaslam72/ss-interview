import React, { useEffect, useState } from 'react';
import './App.css';
import { Card, CardBody, CardTitle } from 'reactstrap';
import TaskList from './components/task-list';
import AddTask from './components/add-task';
import { RowProps } from './types';

/*

  Starting point for the frontend.
  Retrieves a list of tasks and passes it to it's children.

*/

function App() {
  const [rows, setRows] = useState<RowProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/todos/')
      .then(response => response.json())
      .then(data => {
        setRows(data.rows)

      });
  }, []);

  return (
    <div className="App">
      <Card className="m-4">
        <CardBody>
          <CardTitle className="d-flex align-content-center justify-content-between" tag="h3">
            What's on the Agenda?
            <AddTask setRows={setRows} />
          </CardTitle>
          <TaskList rows={rows} setRows={setRows} />
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
