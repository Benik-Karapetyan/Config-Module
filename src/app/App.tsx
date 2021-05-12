import {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Tasks from '../pages/Tasks';
import AppHeader from '../components/AppHeader';
import Home from '../pages/Home';
import CreateTemplate from '../pages/CreateTemplate';
// import {DefaultLayout} from '../layouts/DefaultLayout';

const App = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Router>
        <AppHeader />

        {/* <DefaultLayout> */}
        <Switch>
          <Route path="/create">
            <CreateTemplate />
          </Route>
          <Route path="/">
            {/* <Tasks /> */}
            <Home></Home>
          </Route>
        </Switch>
        {/* </DefaultLayout> */}
      </Router>
    </Suspense>
  );
};

export default App;
