import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Task from "./task";
import { ColumnProps, RowProps } from "../types";

/*
  This is a simple component that takes in a list of rows and columns and renders the data in a table
*/

interface TaskListProps {
  rows: RowProps[];
  columns: ColumnProps[];
  setRows: (value: RowProps[]) => void;
}

const TaskList: React.FC<TaskListProps> = ({ rows, setRows, columns }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          {/* Display the list of columns */}
          {columns.map((column, idx) => {
            return <th key={idx}>{column.title}</th>;
          })}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => {
          // Display each task on a separate row
          return (
            <Task
              key={`${row.id}-${idx}`}
              columns={columns}
              row={row}
              setRows={setRows}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default TaskList;
