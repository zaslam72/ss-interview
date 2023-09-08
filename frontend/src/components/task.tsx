import React from 'react';
import EditTask from './edit-task';
import DeleteTask from './delete-task';
import { RowProps } from '../types';

/*
    This is a simple component that takes in a row and renders the data displayed in a row.
*/

interface TaskProps {
  row: RowProps;
  setRows: (value: RowProps[]) => void;
}

const Task: React.FC<TaskProps> = ({ row, setRows }) => {
  return (
    <tr>
      <td>{row.text}</td>
      <td>{row.status}</td>
      <td>
        <EditTask row={row} setRows={setRows} />
        <DeleteTask rowId={row.id} setRows={setRows} />
      </td>
    </tr>
  );
}

export default Task;