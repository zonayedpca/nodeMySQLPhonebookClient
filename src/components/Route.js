import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from './';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Phonebook from '../Phonebook';
import Edit from '../Phonebook/Edit';

const AppRoute = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/phonebook" component={Phonebook} />
      <PrivateRoute exact path="/phonebook/:id/edit" component={Edit} />
    </Fragment>
  </BrowserRouter>
)

export { AppRoute };
