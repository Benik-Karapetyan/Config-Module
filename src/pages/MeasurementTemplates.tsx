import {FC} from 'react';
import {Grid} from '@material-ui/core';
import SideBar from '../components/SideBar';
import TemplatesTable from '../components/MeasurementTemplates/TemplatesTable';

const navLinks = [
  {text: 'Шаблоны журнала измерений', to: '/templates'},
  {text: 'Справочник категорий измерений', to: '/categories'},
];

interface MeasurementTemplatesProps {}

const MeasurementTemplates: FC<MeasurementTemplatesProps> = () => {
  return (
    <Grid container className="py-10">
      <Grid item xs={3} className="pr-7">
        <SideBar items={navLinks} />
      </Grid>
      <Grid item xs={9} className="pr-7">
        <h1 className="main-title mt-1">Шаблоны журнала измерений</h1>

        <TemplatesTable />
      </Grid>
    </Grid>
  );
};

export default MeasurementTemplates;
