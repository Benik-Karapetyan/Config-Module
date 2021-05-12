import {FC} from 'react';
import {Grid} from '@material-ui/core';
import SideBar from '../SideBar';
import Filters from './components/Filters';
import TemplatesTable from './components/TemplatesTable';
import './measurementTemplates.css';

interface MeasurementTemplatesProps {}

const MeasurementTemplates: FC<MeasurementTemplatesProps> = () => {
  const handleFilter = (filters: {}) => {
    console.log(filters);
  };

  return (
    <Grid container className="py-10">
      <Grid item xs={3} className="pr-7">
        <SideBar />
      </Grid>
      <Grid item xs={9} className="pr-7">
        <div>
          <h1 className="main-title">Шаблоны журнала измерений</h1>
          <Filters onFilter={handleFilter} />

          <TemplatesTable />
        </div>
      </Grid>
    </Grid>
  );
};

export default MeasurementTemplates;
