import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Layout} from "antd";
import Tasks from "./pages/Tasks";

const {Content} = Layout;

const App = () => {
  return (
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
  );
}

export default App;
