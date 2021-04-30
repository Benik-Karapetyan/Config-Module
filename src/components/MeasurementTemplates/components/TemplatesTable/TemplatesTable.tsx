import {FC, useState} from 'react';
import {IconButton} from '@material-ui/core';
import DataTable from '../common/DataTable';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Column, SortColumn} from '../common/DataTable/Head';

const columns: Column[] = [
  {label: 'Название', path: 'name'},
  {label: 'Категория', path: 'calories'},
  {label: 'Статус', path: 'fat'},
  {label: 'Отделение', path: 'carbs'},
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
  const [items, setItems] = useState([
    {id: 1, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 2, name: 'Cupcake2', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 3, name: 'Cupcake3', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 4, name: 'Cupcake4', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 5, name: 'Cupcake5', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 6, name: 'Cupcake6', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 7, name: 'Cupcake7', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 8, name: 'Cupcake8', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 9, name: 'Cupcake9', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 10, name: 'Cupcake10', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: 11, name: 'Cupcake11', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
  ]);

  const handleSort = (sortColumn: SortColumn) => {
    console.log(sortColumn);
    setSortColumn(sortColumn);
    let newItems = items.map((item) => ({...item}));
    newItems[0].name = 'Vaxo';
    setItems(newItems);
  };

  return <DataTable columns={columns} sortColumn={sortColumn} items={items} onSort={handleSort} />;
};

export default TemplatesTable;
