import {FC, ChangeEvent, useState, useEffect} from 'react';
import API from '../../../app/api';
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

interface Department {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface FiltersProps {
  isDefault?: string | number;
  onFilter: Function;
  onClick: Function;
}

const Filters: FC<FiltersProps> = ({isDefault, onFilter, onClick}) => {
  const classes = useStyles();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleDepartmentSelect = (e: ChangeEvent<{}>, value: Value<Department, false, false, false>) => {
    onFilter({branchId: value?.id});
  };

  const handleCategorySelect = (e: ChangeEvent<{}>, value: Value<Category, false, false, false>) => {
    onFilter({categoryId: value?.id});
  };

  const handleStatusSelect = (event: ChangeEvent<{value: unknown}>) => {
    onFilter({isDefault: event.target.value as string});
  };

  const getDepartments = async () => {
    try {
      const {data} = await API.get('/measurementLog/templateBranches');
      const {branches: departments} = data.data;

      setDepartments(departments);
    } catch (err) {
      console.error(err);
    }
  };

  const getCategories = async () => {
    try {
      const {data} = await API.get('/measurementLog/templateCategories');
      const {categories} = data.data;

      setCategories(categories);
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
          options={departments}
          getOptionLabel={(option) => option.name}
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
          getOptionLabel={(option) => option.name}
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
          <InputLabel id="status">Статус</InputLabel>
          <Select value={isDefault} onChange={handleStatusSelect} labelId="status">
            <MenuItem value={1}>По умолчанию</MenuItem>
            <MenuItem value={0}>По выбору</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Button color="primary" variant="contained" disableElevation className={classes.button} onClick={() => onClick()}>
        <SearchIcon fontSize="large" />
      </Button>
    </Grid>
  );
};

export default Filters;
