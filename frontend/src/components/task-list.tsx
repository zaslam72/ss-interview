import React, { useEffect, useState } from 'react';
import { Table } from "reactstrap";
import Task from './task';
import { RowProps } from '../types';

/*
  This is a simple component that takes in a list of rows and renders the data in a table
  GAP: I am hard-coding the task name and status columns here. 
    We could be smarter about this and dynamically display columns provided by the API.
*/


interface TaskListProps {
  rows: RowProps[]
  setRows: (value: RowProps[]) => void;
}

const TaskList: React.FC<TaskListProps> = ({ rows, setRows }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Status</th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => {
          return (
            <Task key={`${row.id}-${idx}`} row={row} setRows={setRows} />
          )
        })}
      </tbody>
    </Table >
  );
}

export default TaskList;