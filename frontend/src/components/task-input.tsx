import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { ColumnProps, RowProps } from "../types";

/*
  This component displays an input type based on the given column
  It will also set the default value if we are doing an Edit on an existing task
*/

interface TaskInputProps {
  row?: RowProps;
  column: ColumnProps;
}

const TaskInput: React.FC<TaskInputProps> = ({ column, row }) => {
  const { title, options, type } = column;

  // Capture the current value of this cell if it's an EDIT action
  let defaultValue;
  if (row) {
    const currentCell = row.cells.find((cell) => cell.columnId === column.id);
    defaultValue = currentCell?.value;
  }

  // Return a SELECT input if it's a PICKLIST and we were provided with the options list
  if (type === "PICKLIST" && options?.length) {
    return (
      <FormGroup>
        <Label for={title}>{title}</Label>
        <Input
          id={title}
          name={column.id}
          type="select"
          defaultValue={defaultValue}
        >
          {options.map((option, idx) => (
            <option key={`${option}-${idx}`} value={option}>
              {option}
            </option>
          ))}
        </Input>
      </FormGroup>
    );
  } else {
    // Otherwise, return a text input
    return (
      <FormGroup>
        <Label for={title}>{title}</Label>
        <Input
          id={title}
          name={column.id}
          type="textarea"
          defaultValue={defaultValue}
        />
      </FormGroup>
    );
  }
};

export default TaskInput;
