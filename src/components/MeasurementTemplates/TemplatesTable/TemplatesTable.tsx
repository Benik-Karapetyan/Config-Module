import {FC, useState, useEffect, ChangeEvent} from 'react';
import API from '../../../app/api';
import {IconButton, Grid, CircularProgress} from '@material-ui/core';
import Filters from '../Filters';
import DataTable from '../DataTable';
import Pagination from '@material-ui/lab/Pagination';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Column, SortColumn} from '../DataTable/Head';

const columns: Column[] = [
  {label: 'Название', path: 'name'},
  {label: 'Категория', path: 'category.name'},
  {label: 'Статус', path: 'isDefault'},
  {label: 'Отделение', path: 'branches'},
  {
    key: 'action',
    content: () => (
      <span>
        Действия
        <IconButton size="small">
          <MoreVertIcon fontSize="inherit" />
        </IconButton>
      </span>
    ),
  },
];

interface FilterProps {
  branchId?: number;
  categoryId?: number;
  isDefault?: string | number;
  limit: number;
  offset?: number;
}

export interface TemplatesTableProps {}

const TemplatesTable: FC<TemplatesTableProps> = () => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<FilterProps>({isDefault: '', limit: 5});
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [sortColumn, setSortColumn] = useState<SortColumn>({path: '', order: ''});
  const [templates, setTemplates] = useState([]);

  const handleFilter = (filter: any) => {
    setFilters({...filters, ...filter});
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setFilters({...filters, offset: (value - 1) * filters.limit});
  };

  const handleSort = (sortColumn: SortColumn) => {
    setSortColumn(sortColumn);

    doFilter();
  };

  const doFilter = () => {
    let query = '?';

    for (let key in filters) {
      //@ts-ignore
      if (filters[key] || filters[key] === 0) query += key + '=' + filters[key] + '&';
    }

    query = query.slice(0, query.length - 1);

    if (sortColumn.order === 'asc') {
      if (sortColumn.path === 'category.name') {
        query += '&sort=' + 'category';
      } else if (sortColumn.path === 'branches[0].name') {
        query += '&sort=' + 'branch';
      } else {
        query += '&sort=' + [sortColumn.path];
      }
    } else if (sortColumn.order === 'desc') {
      if (sortColumn.path === 'category.name') {
        query += '&sort=' + '-' + 'category';
      } else if (sortColumn.path === 'branches[0].name') {
        query += '&sort=' + '-' + 'branch';
      } else {
        query += '&sort=' + '-' + [sortColumn.path];
      }
    }

    getTemplates(query);
  };

  const getTemplates = async (query?: string) => {
    setLoading(true);
    let url = '/measurementLog/template';
    if (query) url += query;

    try {
      const {data} = await API.get(url);

      const {totalCount} = data.meta;
      const {templates} = data.data;

      setPagesCount(Math.ceil(totalCount / filters.limit));
      setTemplates(templates);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    doFilter();
  }, []);

  useEffect(() => {
    doFilter();
  }, [filters.offset]);

  return (
    <>
      <Filters
        isDefault={filters.isDefault}
        onFilter={handleFilter}
        onClick={(e: any) => (page === 1 ? doFilter() : handlePageChange(e, 1))}
      />
      <DataTable loading={loading} columns={columns} sortColumn={sortColumn} items={templates} onSort={handleSort} />
      {/* {loading && (
        <Grid
          container
          justify="center"
          style={{border: '1px solid rgba(224, 224, 224, 1)', borderTop: 'none', padding: 20}}
        >
          <CircularProgress />
        </Grid>
      )} */}
      <Pagination
        page={page}
        onChange={handlePageChange}
        count={pagesCount}
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

export default TemplatesTable;
