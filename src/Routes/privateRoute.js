import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Dashboard from '../Pages/Dashboard/Dashboard'
import Customers from '../Pages/Dashboard/Customers'
import Orders from '../Pages/Dashboard/Orders'
import Login from '../Pages/Login/Login'
import DetailCustomer from '../Pages/Dashboard/DetailCustomer'
import Setting from '../Pages/Dashboard/Setting'
import { Redirect } from 'react-router-dom'

const privateRoute = () => {
  return (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/customers" component={Customers} />
        <Route path="/detailcustomer" component={DetailCustomer} />
        <Route path="/orders" component={Orders} />
        <Route path="/login" component={Login} />
        <Route path="/settings" component={Setting} />
    </Switch>
  )
}

export default privateRoute