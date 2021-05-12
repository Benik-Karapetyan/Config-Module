import {FC, useState, ChangeEvent} from 'react';
import {TableContainer, Table} from '@material-ui/core';
import TableHeader from './Head';
import TableBody from './Body';
import Pagination from '@material-ui/lab/Pagination';
import {Column, SortColumn} from './Head';

export interface DataTableProps {
  columns: Column[];
  sortColumn: SortColumn;
  items: any[];
  onSort: Function;
}

const DataTable: FC<DataTableProps> = ({columns, sortColumn, items, onSort}) => {
  const [page, setPage] = useState(1);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <TableContainer>
        <Table style={{border: '1px solid rgba(224, 224, 224, 1)'}}>
          <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
          <TableBody columns={columns} items={items} />
        </Table>
      </TableContainer>
      <Pagination
        page={page}
        onChange={handleChange}
        count={10}
        className="pt-5"
        size="large"
        showFirstButton
        showLastButton
        hidePrevButton
        hideNextButton
        shape="rounded"
        variant="outlined"
      />
    </>
  );
};

export default DataTable;
