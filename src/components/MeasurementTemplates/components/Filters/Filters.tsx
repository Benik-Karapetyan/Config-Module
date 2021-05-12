import {FC, ChangeEvent, useState, useEffect} from 'react';
import API from '../../../../api';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Autocomplete, Value} from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import {Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    departmentName: {
      minWidth: 300,
    },
    category: {
      minWidth: 300,
      marginLeft: 100,
    },
    statusControl: {
      width: '100%',
    },
    button: {
      padding: '0 40px',
    },
  })
);

const departmentNames = [
  {title: 'The Shawshank Redemption', id: 1},
  {title: 'The Godfather', id: 2},
  {title: 'The Godfather: Part II', id: 3},
  {title: 'The Dark Knight', id: 4},
  {title: '12 Angry Men', id: 5},
];

const categories = [
  {title: 'The Shawshank Redemption', id: 1},
  {title: 'The Godfather', id: 2},
  {title: 'The Godfather: Part II', id: 3},
  {title: 'The Dark Knight', id: 4},
  {title: '12 Angry Men', id: 5},
];

interface FilterAttrs {
  departmentName?: number;
  category?: number;
  isDefault?: string;
}

export interface FiltersProps {
  onFilter: Function;
}

const Filters: FC<FiltersProps> = ({onFilter}) => {
  const classes = useStyles();
  const [filters, setFilters] = useState<FilterAttrs>({isDefault: ''});

  const handleDepartmentSelect = (
    e: ChangeEvent<{}>,
    value: Value<{id: number; title: string}, false, false, false>
  ) => {
    setFilters({...filters, departmentName: value?.id});
    onFilter({...filters, departmentName: value?.id});
  };

  const handleCategorySelect = (e: ChangeEvent<{}>, value: Value<{id: number; title: string}, false, false, false>) => {
    setFilters({...filters, category: value?.id});
    onFilter({...filters, category: value?.id});
  };

  const handleStatusSelect = (event: ChangeEvent<{value: unknown}>) => {
    setFilters({...filters, isDefault: event.target.value as string});
    onFilter({...filters, isDefault: event.target.value as string});
  };

  const getDepartments = async () => {
    try {
      const {data} = await API.get('/measurementLog/templateBranches');
      const {branches: departments} = data.data;

      console.log(departments);
    } catch (err) {
      console.error(err);
    }
  };

  const getCategories = async () => {
    try {
      const {data} = await API.get('/measurementLog/templateCategories');
      const {categories} = data.data;

      console.log(categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDepartments();
    getCategories();
  }, []);

  return (
    <Grid container justify="space-between" className="py-6">
      <Grid item xs={3}>
        <Autocomplete
          options={departmentNames}
          getOptionLabel={(option) => option.title}
          onChange={handleDepartmentSelect}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Название Отделения"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
            />
          )}
        />
      </Grid>

      <Grid item xs={3}>
        <Autocomplete
          options={categories}
          getOptionLabel={(option) => option.title}
          onChange={handleCategorySelect}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Категория"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
            />
          )}
        />
      </Grid>

      <Grid item xs={3}>
        <FormControl variant="outlined" className={classes.statusControl}>
          <InputLabel id="category">Статус</InputLabel>
          <Select value={filters.isDefault} onChange={handleStatusSelect} labelId="category">
            <MenuItem value={1}>По умолчанию</MenuItem>
            <MenuItem value={0}>По выбору</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Button variant="contained" color="primary" disableElevation className={classes.button}>
        <SearchIcon fontSize="large" />
      </Button>
    </Grid>
  );
};

export default Filters;