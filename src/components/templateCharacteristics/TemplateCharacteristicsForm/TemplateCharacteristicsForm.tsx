import {FC, useState, useEffect, ChangeEvent} from 'react';
import API from '../../../api';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Grid, TextField, Button, FormControlLabel, Switch} from '@material-ui/core';
import {Autocomplete, Value} from '@material-ui/lab';
import CategoryForm from '../CategoryForm';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() =>
  createStyles({
    nameTextField: {
      width: '100%',
      marginBottom: 24,
    },
    templateCategorySelect: {
      width: '100%',
      marginBottom: 40,
    },
    attachToText: {
      fontSize: 18,
      lineHeight: '25px',
      letterSpacing: '0px',
    },
    changeAttachmentBtn: {
      color: '#0070D7',
      cursor: 'pointer',
      textDecoration: 'underline',
      fontSize: 16,
      lineHeight: '22px',
      letterSpacing: 0,
    },
    departmentSelect: {
      width: '100%',
      marginBottom: 25,
    },
    button: {
      padding: 10,
      paddingLeft: 15,
      background: '#E8E8E8',
      marginBottom: 25,
      borderRadius: 10,
    },
    defaultTemplateSwitch: {
      margin: 0,
    },
  })
);

interface Category {
  id: number;
  name: string;
}

interface CharacteristicCategory {
  id: number;
  name: string;
  templates: {id: number; name: string}[];
}

interface MeasurementTemplate {
  name: string;
  categoryId?: string | number;
  locations: string[];
  isDefault: boolean;
  characteristicCategories: CharacteristicCategory[];
}

export interface TemplateCharacteristicsFormProps {}

const TemplateCharacteristicsForm: FC<TemplateCharacteristicsFormProps> = () => {
  const classes = useStyles();
  const [measurementTemplate, setMeasurementTemplate] = useState<MeasurementTemplate>({
    name: '',
    categoryId: '',
    locations: ['40da4b9d-7d7c-40a7-b903-696b0d17ecba'],
    isDefault: true,
    characteristicCategories: [],
  });
  const [categories, setCategories] = useState<Category[]>([]);

  const handleNameChange = (e: ChangeEvent<{value: string}>) => {
    setMeasurementTemplate({...measurementTemplate, name: e.target.value});
  };

  const handleCategorySelect = (e: ChangeEvent<{}>, value: Value<Category, false, false, false>) => {
    setMeasurementTemplate({...measurementTemplate, categoryId: value?.id});
  };

  const handleIsDefaultChange = (e: ChangeEvent<{}>, checked: boolean) => {
    setMeasurementTemplate({...measurementTemplate, isDefault: checked});
    console.log(measurementTemplate);
  };

  const addCategory = () => {
    let categories = measurementTemplate;
  };

  const handleCategoryFormChange = (item: CharacteristicCategory, prop: 'characteristicCategories') => {
    console.log(prop);

    let arr = measurementTemplate[prop].map((item) => ({...item}));

    // setMeasurementTemplate({...measurementTemplate, [prop]: item});
    console.log(item);
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
    getCategories();
  }, []);

  return (
    <form noValidate autoComplete="off">
      <Grid container>
        <Grid item xs={9}>
          <TextField
            value={measurementTemplate.name}
            label="Наименование шаблона"
            variant="outlined"
            className={classes.nameTextField}
            onChange={handleNameChange}
          />

          <Autocomplete
            className="mb-10"
            options={categories}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Категория шаблона"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
              />
            )}
            onChange={handleCategorySelect}
          />
        </Grid>
      </Grid>

      <h2 className="subtitle mb-6">Привязка шаблона</h2>

      <Grid container justify="space-between" alignItems="center" className="mb-6">
        <span className={classes.attachToText}>Областная городская клиническая больница №1, г. Новосибирск</span>

        <span className={classes.changeAttachmentBtn}>Изменить</span>
      </Grid>

      <Grid container>
        <Grid item xs={9}>
          <Autocomplete
            className="mb-6"
            options={categories}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Отделение"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
              />
            )}
            onChange={handleCategorySelect}
          />

          <Button
            disableElevation
            className={classes.button}
            startIcon={<CalendarTodayIcon style={{color: '#0070D7'}} />}
          >
            добавить отделение
          </Button>

          <div className="switch-label">Шаблон по умолчанию</div>

          <FormControlLabel
            checked={measurementTemplate.isDefault}
            value="Шаблон по умолчанию"
            control={<Switch color="primary" />}
            label={measurementTemplate.isDefault ? 'Да' : 'нет'}
            className="mb-6"
            onChange={handleIsDefaultChange}
          />

          <h1 className="main-title">Характеристики параметров</h1>

          {measurementTemplate.characteristicCategories.map((characteristicCategory) => (
            <CategoryForm key={characteristicCategory.id} tag="div" onChange={handleCategoryFormChange} />
          ))}

          <CategoryForm tag="div" onChange={handleCategoryFormChange} />

          <Button
            disableElevation
            className={classes.button}
            startIcon={<AddIcon style={{color: 'green', fontSize: 28}} />}
            onClick={addCategory}
          >
            добавить категорию
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TemplateCharacteristicsForm;
