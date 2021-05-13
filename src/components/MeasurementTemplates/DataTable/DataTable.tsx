import {FC} from 'react';
import {TableContainer, Table} from '@material-ui/core';
import TableHeader from './Head';
import TableBody from './Body';
import {Column, SortColumn} from './Head';

export interface DataTableProps {
  columns: Column[];
  sortColumn: SortColumn;
  items: any[];
  onSort: Function;
}

const DataTable: FC<DataTableProps> = ({columns, sortColumn, items, onSort}) => {
  return (
    <>
      <TableContainer>
        <Table style={{border: '1px solid rgba(224, 224, 224, 1)'}}>
          <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
          <TableBody columns={columns} items={items} />
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
