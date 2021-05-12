import {FC, useState, useEffect} from 'react';
import API from '../../../api';
import {IconButton} from '@material-ui/core';
import Filters from '../Filters';
import DataTable from '../DataTable';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Column, SortColumn} from '../DataTable/Head';

const columns: Column[] = [
  {label: 'Название', path: 'name'},
  {label: 'Категория', path: 'category.name'},
  {label: 'Статус', path: 'isDefault'},
  {label: 'Отделение', path: 'branches[0].name'},
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

export interface TemplatesTableProps {}

const TemplatesTable: FC<TemplatesTableProps> = () => {
  const [sortColumn, setSortColumn] = useState<SortColumn>({path: '', order: ''});
  const [templates, setTemplates] = useState([]);

  const handleFilter = (filters: {}) => {
    console.log(filters);
  };

  const handleSort = (sortColumn: SortColumn) => {
    console.log(sortColumn);
    setSortColumn(sortColumn);
    // let newItems = items.map((item) => ({...item}));
    // setItems(newItems);
  };

  const getTemplates = async (query?: string) => {
    let url = '/measurementLog/template';
    if (query) url += query;

    try {
      const {data} = await API.get(url);
      const {templates} = data.data;

      setTemplates(templates);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTemplates();
  }, []);

  return (
    <>
      <Filters onFilter={handleFilter} />
      <DataTable columns={columns} sortColumn={sortColumn} items={templates} onSort={handleSort} />
    </>
  );
};

export default TemplatesTable;
