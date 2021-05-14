import React, {FC} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import BAutocomplete from './Bautocomplete';

export interface CategoryFormProps {
  tag?: typeof React.Component | string;
}

const CategoryForm: FC<CategoryFormProps> = ({tag}) => {
  const WrapperTag = tag || 'form';

  return (
    <WrapperTag className="d-block" style={{width: '100%'}}>
      <FormControl variant="outlined" className="d-block mb-6">
        <InputLabel id="category">Категория</InputLabel>
        <Select labelId="category" style={{width: '100%'}}>
          <MenuItem value={1}>По умолчанию</MenuItem>
          <MenuItem value={0}>По выбору</MenuItem>
        </Select>
      </FormControl>

      <BAutocomplete></BAutocomplete>
    </WrapperTag>
  );
};

export default CategoryForm;
