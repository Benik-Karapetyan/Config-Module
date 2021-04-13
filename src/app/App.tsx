import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Suspense} from "react";
import {Layout} from "antd";
import Tasks from "../pages/Tasks";

const {Content} = Layout;

const App = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Router>
        <Layout>
          <Content>
            <Switch>
              <Route path="/">
                <Tasks/>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
