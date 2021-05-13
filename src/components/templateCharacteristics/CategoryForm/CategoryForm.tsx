import {FC} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'block',
    },
    departmentSelect: {
      width: '100%',
      marginBottom: 25,
    },
  })
);

export interface CategoryFormProps {}

const CategoryForm: FC<CategoryFormProps> = () => {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.departmentSelect}>
        <InputLabel id="category">Отделение</InputLabel>
        <Select labelId="category">
          <MenuItem value={1}>По умолчанию</MenuItem>
          <MenuItem value={0}>По выбору</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoryForm;
