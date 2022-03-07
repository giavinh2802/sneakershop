import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Dashboard from '../Pages/Dashboard/Dashboard'
import Customers from '../Pages/Dashboard/Customers'

const privateRoute = () => {
  return (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/customers" component={Customers} />

    </Switch>
  )
}

export default privateRoute