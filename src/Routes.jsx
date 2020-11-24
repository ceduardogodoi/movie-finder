import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Search from './pages/Search'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/search" component={Search} />
    </Switch>
  )
}

export default Routes
