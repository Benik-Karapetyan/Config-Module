import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Suspense} from "react";
import {Tasks} from "../pages/Tasks";
import {DefaultLayout} from "../layouts/DefaultLayout";


const App = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Router>
        <DefaultLayout>
          <Switch>
            <Route path="/">
              <Tasks/>
            </Route>
          </Switch>
        </DefaultLayout>
      </Router>
    </Suspense>
  );
}

export default App;
