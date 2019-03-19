import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props =>
      !JSON.parse(localStorage.getItem('jwt-token')) ?
      <Component {...props} log={console.log('Phonebook is ready')} /> : <Redirect log={console.log('Redirect now')} to="/" />}
    />
  )
}

export { PublicRoute };
