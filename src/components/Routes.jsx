import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

import PrivateRoute from './PrivateRoute'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <LandingPage />
      </Route>

      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>

      <PrivateRoute path='/home'>
        <Home />
      </PrivateRoute>
    </Switch>
  </Router>
)

export default Routes