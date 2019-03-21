import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Section } from '../components/common';

import { getLogout } from '../actions';

const Home = ({ login, getLogout, history }) => (
  <Section name="home">
    <div className="intro">
      <p>Personal</p>
      <h1>Phone<br />book</h1>
      <div className="action">
        {login.auth ? <React.Fragment>
          <Link to="/phonebook" className="btn btn-phonebook">Phonebook</Link>
          <button onClick={() => getLogout(history)} className="btn btn-logout">Logout?</button>
        </React.Fragment> :
        <React.Fragment>
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/register" className="btn btn-register">Register</Link>
        </React.Fragment>}
      </div>
    </div>
  </Section>
)

export default connect(({ login }) => ({ login }), { getLogout })(Home);
