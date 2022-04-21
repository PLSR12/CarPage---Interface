import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Cars } from './pages'

function AppRoutes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/carros' component={Cars} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
