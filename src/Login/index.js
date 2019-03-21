import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Section, Area, Form } from '../components/common';

import { getLogin } from '../actions';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleForm = e => {
    const { username, password } = this.state;
    const { getLogin, history } = this.props;
    e.preventDefault();
    if(username && password)
      getLogin(username, password, history);
  }

  render() {
    const { username, password } = this.state;
    const { login, alert } = this.props;

    return (
      <Section name="login">
        <Area className="login-area" backBtn="Home" backLink="/" title="Login">
          { alert && <p className={`alert alert-${alert.type}`}>{alert.msg}</p> }
          <Form className="form form-login" onSubmit={this.handleForm} onUserNameChange={(username) => this.setState({ username })} onPasswordChange={(password) => this.setState({ password })} title="Login" altBtn="Register" altLink="register" value={{username, password}} content={login} />
        </Area>
      </Section>
    )
  }
}

export default connect(({ login, alert }) => ({ login, alert }), { getLogin })(Login);
