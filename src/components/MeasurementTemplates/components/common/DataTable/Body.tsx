import {FC} from 'react';
import {TableBody, TableRow, TableCell} from '@material-ui/core';
import _ from 'lodash';
import {Column} from './Head';

export interface BodyProps {
  items: any[];
  columns: Column[];
}

const Body: FC<BodyProps> = ({items, columns}) => {
  const renderCell = (item: {}, column: Column) => {
    if (column.content) return column.content(item);

    return _.get(item, `${column?.path}`);
  };

  const createKey = (item: {id: number}, column: Column) => {
    return item.id + (column.path || column.key || '');
  };

  return (
    <TableBody>
      {items.map((item: any) => (
        <TableRow key={item.id}>
          {columns.map((column) => (
            <TableCell key={createKey(item, column)}>{renderCell(item, column)}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
