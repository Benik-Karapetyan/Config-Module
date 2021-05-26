import React, {FC, useState, useEffect, ChangeEvent, MouseEventHandler} from 'react';
import API from '../../../app/api';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Grid, TextField, Divider, Button} from '@material-ui/core';
import {Autocomplete, Value} from '@material-ui/lab';
import BAutocomplete from './Bautocomplete';
import TimingForm from '../TimingForm';
import RemoveIcon from '@material-ui/icons/Remove';
import {CharacteristicCategory, TemplateTiming} from '../MeasurementTemplateForm/types';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      paddingLeft: 10,
      background: 'white',
    },
  })
);

interface Template {
  id: number;
  name: string;
  templates: TemplateTiming[];
}

export interface CategoryFormProps {
  tag?: typeof React.Component | string;
  data: CharacteristicCategory;
  onCategoryChange: Function;
  onParamChange: Function;
  onTimingChange: Function;
  onDelete: MouseEventHandler;
}

const CategoryForm: FC<CategoryFormProps> = ({
  tag,
  data,
  onCategoryChange,
  onParamChange,
  onTimingChange,
  onDelete,
}) => {
  const classes = useStyles();
  const WrapperTag = tag || 'form';
  const [characteristicsCategories, setCharacteristicsCategories] = useState<Template[]>([]);
  const [templates, setTemplates] = useState<TemplateTiming[]>([]);

  const handleCategorySelect = (e: ChangeEvent<{}>, value: Value<Template, false, false, false>) => {
    console.log(value);
    if (value) {
      setTemplates(value.templates);
      onCategoryChange(value.id);
    } else {
      onCategoryChange(value);
    }
  };

  const handleParamSelect = (items: TemplateTiming[]) => {
    onParamChange(items);
  };

  const getCharacteristicCategories = async () => {
    try {
      const {data} = await API.get('/measurementLog/characteristic-category');

      data.data.forEach(
        (item: {templates: any[]}) =>
          (item.templates = item.templates.map((template) => ({templateId: template.id, name: template.name})))
      );

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
      <Grid container justify="space-between">
        <Grid>
          <Autocomplete
            style={{minWidth: 683}}
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

          <Grid>
            <Divider orientation="vertical" flexItem className="mr-12" />

            <BAutocomplete value={data.templateTimings} items={templates} onChange={handleParamSelect}></BAutocomplete>
          </Grid>

          {data.templateTimings.map((templateTiming, i) => (
            <TimingForm
              key={i}
              tag="div"
              title={templateTiming.name}
              data={templateTiming}
              onTimingChange={(item: TemplateTiming) => onTimingChange(item, i)}
            />
          ))}
        </Grid>

        <Grid>
          <Button
            className={classes.button}
            disableElevation
            startIcon={<RemoveIcon style={{color: '#FF564E'}} />}
            onClick={onDelete}
          >
            Удалить
          </Button>
        </Grid>
      </Grid>
    </WrapperTag>
  );
};

export default CategoryForm;
