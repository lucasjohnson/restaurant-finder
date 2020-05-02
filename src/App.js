import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
