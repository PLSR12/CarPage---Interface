import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Cars, Motorcycles, Admin } from './pages'
import paths from './constants/paths'

function AppRoutes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/motos' component={Motorcycles} />
        <Route exact path='/carros' component={Cars} />
        <Route exact path={paths.Cars} component={Admin} />
        <Route exact path={paths.NewCar} component={Admin} />
        <Route exact path={paths.EditCar} component={Admin} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
