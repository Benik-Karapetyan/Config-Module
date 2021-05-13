import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Grid, IconButton} from '@material-ui/core';
import SideBar from '../components/SideBar';
import TemplateCharacteristicsForm from '../components/templateCharacteristics/TemplateCharacteristicsForm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const navLinks = [
  {text: 'Характеристики шаблона', to: '/create/template-characteristics'},
  {text: 'Характеристики параметров', to: '/create/param-characteristics'},
];

export interface TemplateCharacteristicsProps {}

const TemplateCharacteristics: FC<TemplateCharacteristicsProps> = () => {
  return (
    <Grid container>
      <Grid container alignItems="center" className="py-5">
        <Link to="/templates" className="mx-3">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>

        <h1 className="toolbar-title">Новый шаблон измерений</h1>
      </Grid>
      <Grid item xs={3} className="pr-7">
        <SideBar items={navLinks} />
      </Grid>
      <Grid item xs={9} className="pr-7">
        <h1 className="main-title">Характеристики шаблона</h1>

        <TemplateCharacteristicsForm />
      </Grid>
    </Grid>
  );
};

export default TemplateCharacteristics;
