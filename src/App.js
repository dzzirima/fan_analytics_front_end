import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MileageReport from './pages/MileageReport'
import LocationReport from './pages/LocationReport'
import Layout from './components/Layout'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/location">
            <LocationReport/>
          </Route>
          <Route path="/fuel">
            <MileageReport/>
          </Route>
          <Route exact path = "/Login">
          <Login/>
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
