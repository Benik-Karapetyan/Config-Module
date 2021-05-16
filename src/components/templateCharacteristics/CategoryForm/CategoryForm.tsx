import React, {FC} from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import BAutocomplete from './Bautocomplete';
import TimingForm from '../TimingForm';

export interface CategoryFormProps {
  tag?: typeof React.Component | string;
}

const CategoryForm: FC<CategoryFormProps> = ({tag}) => {
  const WrapperTag = tag || 'form';

  return (
    <WrapperTag
      className="d-block"
      style={{width: '100%', background: '#EEF2F4', marginBottom: 40, padding: '24px 24px 0'}}
    >
      <FormControl variant="outlined" className="d-block mb-6">
        <InputLabel id="category">Категория</InputLabel>
        <Select labelId="category" style={{width: '100%'}}>
          <MenuItem value={1}>По умолчанию</MenuItem>
          <MenuItem value={0}>По выбору</MenuItem>
        </Select>
      </FormControl>

      <BAutocomplete></BAutocomplete>

      <TimingForm title="Систолическое АД" />
    </WrapperTag>
  );
};

export default CategoryForm;
