import React from 'react';
import { connect } from 'react-redux';

const PrivateRoute = ({login, children}) => (
  <React.Fragment log={console.log(login)}>
    {login.username ? children : ''}
  </React.Fragment>
)

export default connect(({login}) => ({login}))(PrivateRoute);
