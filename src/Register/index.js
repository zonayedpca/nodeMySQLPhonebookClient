import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Section, Area, Form } from '../components/common';

import { getRegister } from '../actions';

class Register extends Component {
  state = {
    username: '',
    password: ''
  }

  handleForm = e => {
    const { username, password } = this.state;
    const { getRegister, history } = this.props;
    e.preventDefault();
    if(username && password)
      getRegister(username, password, history);
  }

  render() {
    const { username, password } = this.state;
    const { register, alert } = this.props;

    return (
      <Section name="register">
        <Area className="register-area" backBtn="Home" backLink="/" title="Register">
          { alert.msg && <p className="alert alert-error">{alert.msg}</p> }
          <Form className="form form-register" onSubmit={this.handleForm} onUserNameChange={(username) => this.setState({ username })} onPasswordChange={(password) => this.setState({ password })} title="Register" altBtn="Login" altLink="login" value={{username, password}} content={register} />
        </Area>
      </Section>
    )
  }
}

export default connect(({ register, alert }) => ({ register, alert }), { getRegister })(Register);
