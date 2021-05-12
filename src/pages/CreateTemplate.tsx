import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Grid, IconButton} from '@material-ui/core';
import SideBar from '../components/SideBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export interface CreateTemplateProps {}

const CreateTemplate: FC<CreateTemplateProps> = () => {
  return (
    <Grid container className="py-5">
      <Grid item xs={3} className="pr-7">
        <Link to="/templates" className="ml-3">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <SideBar />
      </Grid>
      <Grid item xs={9} className="pr-7">
        <h1 className="main-title">Новый шаблон измерений</h1>
      </Grid>
    </Grid>
  );
};

export default CreateTemplate;
