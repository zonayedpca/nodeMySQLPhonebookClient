import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props =>
      JSON.parse(localStorage.getItem('jwt-token')) ?
      <Component {...props} /> : <Redirect to="/login" />}
    />
  )
}

export { PrivateRoute };
