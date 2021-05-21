import {FC, Suspense} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from './app/types';
import SpinnerLoading from './components/SpinnerLoading';
import MessageSnackbar from './components/MessageSnackbar';
import AppHeader from './components/AppHeader';
import MeasurementTemplate from './pages/MeasurementTemplate';
import ParamCharacteristics from './pages/ParamCharacteristics';
import MeasurementTemplates from './pages/MeasurementTemplates';
import MeasurementCategories from './pages/MeasurementCategories';

export interface AppProps {}

const App: FC<AppProps> = () => {
  const loading = useSelector((state: RootState) => state.general.loading);
  const message = useSelector((state: RootState) => state.general.message);

  return (
    <Suspense fallback={'loading...'}>
      <BrowserRouter>
        <SpinnerLoading loading={loading} />
        <MessageSnackbar show={message.show} message={message.text} type={message.type} />

        <AppHeader />

        <Switch>
          <Route path="/create/measurement-template">
            <MeasurementTemplate />
          </Route>
          <Route path="/create/param-characteristics">
            <ParamCharacteristics />
          </Route>
          <Redirect from="/create" to="/create/measurement-template" exact></Redirect>
          <Route path="/templates">
            <MeasurementTemplates />
          </Route>
          <Route path="/categories">
            <MeasurementCategories />
          </Route>
          <Redirect from="/" to="/templates" exact></Redirect>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
