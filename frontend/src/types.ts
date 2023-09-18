/*
  Common spot for keeping types that don't belong to a component.
  Mostly for understanding what data is being provided through the APIs
  Also used for sharing types between components.
*/

export interface RowProps {
  id: string;
  cells: CellProps[];
}

export interface ColumnProps {
  id: string;
  title: string;
  type: string;
  options?: string[];
}

interface CellProps {
  columnId: string;
  value: string;
}
