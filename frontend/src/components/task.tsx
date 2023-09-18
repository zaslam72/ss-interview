import React from "react";
import EditTask from "./edit-task";
import DeleteTask from "./delete-task";
import { ColumnProps, RowProps } from "../types";

/*
    This is a simple component that takes in a row and renders the data displayed in a row.
*/

interface TaskProps {
  columns: ColumnProps[];
  row: RowProps;
  setRows: (value: RowProps[]) => void;
}

const Task: React.FC<TaskProps> = ({ columns, row, setRows }) => {
  return (
    <tr>
      {/* Display value for each cell provided */}
      {row.cells.map((cell, idx) => {
        return <td key={`${cell.columnId}-${idx}`}>{cell.value}</td>;
      })}
      <td>
        <EditTask columns={columns} row={row} setRows={setRows} />
        <DeleteTask rowId={row.id} setRows={setRows} />
      </td>
    </tr>
  );
};

export default Task;
