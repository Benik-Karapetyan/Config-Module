import {FC} from 'react';
import useMeasurementTemplateForm from '../../../hooks/useMeasurementTemplateForm';
import useMeasurementTemplateFormStyles from './MeasurementTemplateForm.Styles';
import {TemplateTiming} from './types';
import {Grid, TextField, Button, FormControlLabel, Switch, CircularProgress, Snackbar} from '@material-ui/core';
import {Autocomplete, Alert} from '@material-ui/lab';
import CategoryForm from '../CategoryForm';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddIcon from '@material-ui/icons/Add';

export interface TemplateCharacteristicsFormProps {}

const TemplateCharacteristicsForm: FC<TemplateCharacteristicsFormProps> = () => {
  const classes = useMeasurementTemplateFormStyles();
  const {
    loading,
    open,
    measurementTemplate,
    categories,
    departments,
    handleClose,
    handleNameChange,
    handleCategorySelect,
    handleDepartmentSelect,
    handleIsDefaultChange,
    addCategory,
    deleteCategory,
    handleCharacteristicCategoryChange,
    handleCharacteristicParamChange,
    handleTimingChange,
    createTemplate,
  } = useMeasurementTemplateForm();

  return (
    <form noValidate autoComplete="off" onSubmit={createTemplate}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} elevation={6} variant="filled" severity="success">
          <h2 style={{margin: 0, color: 'white'}}>You have successfully created a new Template!</h2>
        </Alert>
      </Snackbar>
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
            options={departments}
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
            onChange={handleDepartmentSelect}
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

          {measurementTemplate.characteristicCategories.map((characteristicCategory, i) => (
            <CategoryForm
              key={i}
              tag="div"
              data={characteristicCategory}
              onCategoryChange={(categoryId: number) => handleCharacteristicCategoryChange(categoryId, i)}
              onParamChange={(items: TemplateTiming[]) => handleCharacteristicParamChange(items, i)}
              onTimingChange={(item: TemplateTiming, timingIndex: number) => handleTimingChange(item, timingIndex, i)}
              onDelete={() => deleteCategory(i)}
            />
          ))}

          <Button
            disableElevation
            className={classes.button}
            startIcon={<AddIcon style={{color: 'green', fontSize: 28}} />}
            onClick={addCategory}
          >
            добавить категорию
          </Button>

          <div className="mt-3 mx-auto" style={{width: 400}}>
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              size="large"
              disableElevation
              disabled={loading}
            >
              {/* {loading && <CircularProgress color="inherit" size="2rem" />} */}
              {/* {!loading && 'сохранить шаблон'} */}
              сохранить шаблон
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default TemplateCharacteristicsForm;
