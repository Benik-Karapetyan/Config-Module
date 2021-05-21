import React, {FC, useState, ChangeEvent} from 'react';
import {Autocomplete, Value} from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {TemplateTiming} from '../MeasurementTemplateForm/types';

const icon = <CheckBoxOutlineBlankIcon />;
const checkedIcon = <CheckBoxIcon />;

export interface BAutocompleteProps {
  value: TemplateTiming[];
  items: TemplateTiming[];
  onChange: Function;
}

const BAutocomplete: FC<BAutocompleteProps> = ({items, value, onChange}) => {
  const [selectedFilms, setSelectedFilms] = useState<TemplateTiming[] | null>([]);

  const handleParamSelect = (e: ChangeEvent<{}>, value: Value<TemplateTiming[] | null, false, false, false>) => {
    setSelectedFilms(value);
    onChange(value);
  };

  return (
    <>
      <Autocomplete
        value={value}
        style={{minWidth: 683}}
        options={items}
        className="mb-6"
        multiple
        disableCloseOnSelect
        getOptionLabel={(option) => option.name || ''}
        renderOption={(option, {selected}) => (
          <React.Fragment>
            <Checkbox
              color="primary"
              icon={icon}
              checkedIcon={checkedIcon}
              style={{marginRight: 8}}
              checked={selected}
            />
            {option.name}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Параметр"
            placeholder={`Выбрано ${selectedFilms ? selectedFilms.length : 0} пункта`}
          />
        )}
        onChange={handleParamSelect}
      />
    </>
  );
};

export default BAutocomplete;
