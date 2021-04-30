import {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Tasks from '../pages/Tasks';
import Home from '../pages/Home';
// import {DefaultLayout} from '../layouts/DefaultLayout';

const App = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Router>
        {/* <DefaultLayout> */}
        <Switch>
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
