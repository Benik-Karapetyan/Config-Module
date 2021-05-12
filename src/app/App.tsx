import {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import CreateTemplate from '../pages/CreateTemplate';
import MeasurementTemplates from '../pages/MeasurementTemplates';
import MeasurementCategories from '../pages/MeasurementCategories';

const App = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/create">
            <CreateTemplate />
          </Route>
          <Route path="/templates">
            <MeasurementTemplates />
          </Route>
          <Route path="/categories">
            <MeasurementCategories />
          </Route>
          <Redirect from="/" to="/templates" exact></Redirect>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
