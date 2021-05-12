import {FC} from 'react';
import {Grid} from '@material-ui/core';
import SideBar from '../components/SideBar';

interface MeasurementCategoriesProps {}

const MeasurementCategories: FC<MeasurementCategoriesProps> = () => {
  return (
    <Grid container className="py-10">
      <Grid item xs={3} className="pr-7">
        <SideBar />
      </Grid>
      <Grid item xs={9} className="pr-7">
        <h1>Measurement Categories</h1>
      </Grid>
    </Grid>
  );
};

export default MeasurementCategories;
