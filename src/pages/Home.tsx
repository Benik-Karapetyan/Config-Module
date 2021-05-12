import {FC} from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import MeasurementTemplates from '../components/MeasurementTemplates';
import MeasurementCategories from '../components/MeasurementCategories';

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Switch>
        <Route path="/templates">
          <MeasurementTemplates />
        </Route>
        <Route path="/categories">
          <MeasurementCategories />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
