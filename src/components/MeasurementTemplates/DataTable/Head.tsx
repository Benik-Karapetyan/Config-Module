import {FC} from 'react';
import {TableHead, TableRow, TableCell, Grid} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export interface Column {
  label?: string;
  path?: string;
  key?: string;
  content?: Function;
}

export interface SortColumn {
  path: string | undefined;
  order: string;
}

interface HeadProps {
  columns: Column[];
  sortColumn: SortColumn;
  onSort: Function;
}

const Head: FC<HeadProps> = ({columns, sortColumn, onSort}) => {
  const renderSortIcon = (column: Column) => {
    if (!column.path) return null;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <ArrowUpwardIcon fontSize="small" />;
    return <ArrowDownwardIcon fontSize="small" />;
  };

  const raiseSort = (path: string | undefined) => {
    if (!path) return;
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    onSort(sortColumn);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column: Column, i) => (
          <TableCell
            className={column.path ? 'clickable' : ''}
            key={column.path || column.key || column.label}
            onClick={() => raiseSort(column.path)}
          >
            <Grid container alignItems="center" className="text__bold">
              {column.label} {renderSortIcon(column)}
            </Grid>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Head;
