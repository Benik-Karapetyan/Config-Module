import {FC} from 'react';
import {TableBody, TableRow, TableCell} from '@material-ui/core';
import _ from 'lodash';
import {Column} from './Head';

export interface BodyProps {
  loading: boolean;
  items: any[];
  columns: Column[];
}

const Body: FC<BodyProps> = ({loading, items, columns}) => {
  const renderCell = (item: {isDefault: boolean; branches: [{name: string}]}, column: Column) => {
    if (column.content) return column.content(item);

    if (column.path === 'isDefault') {
      return item.isDefault ? 'По умолчанию' : 'По выбору';
    }

    if (column.path === 'branches') {
      let branches = '';
      // @typescript-ignore
      item.branches.forEach((branch) => (branches += ', ' + branch.name));

      return branches.slice(2);
    }

    return _.get(item, `${column.path}`);
  };

  const createKey = (item: {id: number}, column: Column) => {
    return item.id + (column.path || column.key || '');
  };

  return (
    <>
      {/* {!loading && ( */}
      <TableBody>
        {items.map((item: any) => (
          <TableRow key={item.id}>
            {columns.map((column, i) => (
              <TableCell align={i === 4 ? 'right' : 'left'} key={createKey(item, column)}>
                {renderCell(item, column)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {/* )} */}
    </>
  );
};

export default Body;
