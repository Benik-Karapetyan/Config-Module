import {FC, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {Grid} from '@material-ui/core';
import AppHeader from '../components/AppHeader';
import SideBar from '../components/SideBar';
import MeasurementTemplates from '../components/MeasurementTemplates';
import MeasurementCategories from '../components/MeasurementCategories';

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <AppHeader />
      <Grid container className="py-10">
        <Grid item xs={3} className="pr-7">
          <SideBar />
        </Grid>
        <Grid item xs={9} className="pr-7">
          <Switch>
            <Route path="/templates">
              <MeasurementTemplates />
            </Route>
            <Route path="/categories">
              <MeasurementCategories />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
