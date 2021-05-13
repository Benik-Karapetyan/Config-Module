import {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import TemplateCharacteristics from '../pages/TemplateCharacteristics';
import ParamCharacteristics from '../pages/ParamCharacteristics';
import MeasurementTemplates from '../pages/MeasurementTemplates';
import MeasurementCategories from '../pages/MeasurementCategories';

const App = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/create/template-characteristics">
            <TemplateCharacteristics />
          </Route>
          <Route path="/create/param-characteristics">
            <ParamCharacteristics />
          </Route>
          <Redirect from="/create" to="/create/template-characteristics" exact></Redirect>
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
