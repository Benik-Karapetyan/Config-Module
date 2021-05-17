import React, {FC, useState, useEffect, ChangeEvent} from 'react';
import API from '../../../api';
import {TextField} from '@material-ui/core';
import {Autocomplete, Value} from '@material-ui/lab';
import BAutocomplete from './Bautocomplete';
import TimingForm from '../TimingForm';

interface Category {
  id: number;
  name: string;
}

export interface CategoryFormProps {
  tag?: typeof React.Component | string;
  onChange: Function;
}

const CategoryForm: FC<CategoryFormProps> = ({tag, onChange}) => {
  const WrapperTag = tag || 'form';
  const [characteristicsCategories, setCharacteristicsCategories] = useState<Category[]>([]);

  const handleCategorySelect = (e: ChangeEvent<{}>, value: Value<Category, false, false, false>) => {
    onChange(value, 'characteristicCategories');
  };

  const getCharacteristicCategories = async () => {
    try {
      const {data} = await API.get('/measurementLog/characteristic-category');
      console.log(data);

      setCharacteristicsCategories(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCharacteristicCategories();
  }, []);

  return (
    <WrapperTag
      className="d-block"
      style={{width: '100%', background: '#EEF2F4', marginBottom: 40, padding: '24px 24px 0'}}
    >
      <Autocomplete
        className="mb-10"
        options={characteristicsCategories}
        getOptionLabel={(option) => option.name}
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
        onChange={handleCategorySelect}
      />

      <BAutocomplete></BAutocomplete>

      <TimingForm title="Систолическое АД" />
    </WrapperTag>
  );
};

export default CategoryForm;
