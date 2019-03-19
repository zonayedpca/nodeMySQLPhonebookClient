import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';

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
      <section className="page login">
        <div className="login-area">
          <div className="title">
            <a className="home-link" href="/">Home</a>
            <h2>Register</h2>
          </div>
          { alert && <p className="alert alert-error">{alert.msg}</p> }
          <form className="form form-login" onSubmit={this.handleForm}>
            <input onChange={(e) => this.setState({username: e.target.value})} value={username} type="text" name="username" placeholder="Username" required />
            <input onChange={(e) => this.setState({password: e.target.value})} value={password} type="password" name="password" placeholder="Password" required />
            <button className="btn btn-submit" type="submit">{register.loading && <Loader size={15} color="#fff" />} Register</button>
            <Link className="btn btn-alternate" to="/login">Login</Link>
          </form>
        </div>
      </section>
    )
  }
}

export default connect(({ register, alert }) => ({ register, alert }), { getRegister })(Register);
