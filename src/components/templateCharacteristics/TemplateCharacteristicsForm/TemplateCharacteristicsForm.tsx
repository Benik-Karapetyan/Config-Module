import {FC} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
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

export interface TemplateCharacteristicsFormProps {}

const TemplateCharacteristicsForm: FC<TemplateCharacteristicsFormProps> = () => {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <Grid container>
        <Grid item xs={9}>
          <TextField label="Наименование шаблона" variant="outlined" className={classes.nameTextField} />

          <FormControl variant="outlined" className={classes.templateCategorySelect}>
            <InputLabel id="category">Статус</InputLabel>
            <Select labelId="category">
              <MenuItem value={1}>По умолчанию</MenuItem>
              <MenuItem value={0}>По выбору</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <h2 className="subtitle mb-6">Привязка шаблона</h2>

      <Grid container justify="space-between" alignItems="center" className="mb-6">
        <span className={classes.attachToText}>Областная городская клиническая больница №1, г. Новосибирск</span>

        <span className={classes.changeAttachmentBtn}>Изменить</span>
      </Grid>

      <Grid container>
        <Grid item xs={9}>
          <FormControl variant="outlined" className={classes.departmentSelect}>
            <InputLabel id="category">Отделение</InputLabel>
            <Select labelId="category">
              <MenuItem value={1}>По умолчанию</MenuItem>
              <MenuItem value={0}>По выбору</MenuItem>
            </Select>
          </FormControl>

          <Button
            disableElevation
            className={classes.button}
            startIcon={<CalendarTodayIcon style={{color: '#0070D7'}} />}
          >
            добавить отделение
          </Button>

          <div className="switch-label">Шаблон по умолчанию</div>
          <FormControlLabel
            value="Шаблон по умолчанию"
            control={<Switch color="primary" />}
            label="Да"
            className="ma-0 mb-6"
          />

          <h1 className="main-title">Характеристики параметров</h1>

          <CategoryForm tag="div" />

          <Button
            disableElevation
            className={classes.button}
            startIcon={<AddIcon style={{color: 'green', fontSize: 28}} />}
          >
            добавить категорию
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TemplateCharacteristicsForm;
