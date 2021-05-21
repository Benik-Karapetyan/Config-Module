import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Grid, IconButton} from '@material-ui/core';
import SideBar from '../components/SideBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const navLinks = [
  {text: 'Характеристики шаблона', to: '/create/measurement-template'},
  {text: 'Характеристики параметров', to: '/create/param-characteristics'},
];

export interface ParamCharacteristicsProps {}

const ParamCharacteristics: FC<ParamCharacteristicsProps> = () => {
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
        <h1 className="main-title">Характеристики параметров</h1>
      </Grid>
    </Grid>
  );
};

export default ParamCharacteristics;
