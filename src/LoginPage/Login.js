import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';

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
      <section className="page login">
        <div className="login-area">
          <div className="title">
            <a className="home-link" href="/">Home</a>
            <h2>Login</h2>
          </div>
          { alert && <p className={`alert alert-${alert.type}`}>{alert.msg}</p> }
          <form className="form form-login" onSubmit={this.handleForm}>
            <input onChange={(e) => this.setState({username: e.target.value})} value={username} type="text" name="username" placeholder="Username" required />
            <input onChange={(e) => this.setState({password: e.target.value})} value={password} type="password" name="password" placeholder="Password" required />
            <button className="btn btn-submit" type="submit">{login.loading && <Loader size={15} color="#fff" />} Login</button>
            <Link className="btn btn-alternate" to="/register">Register</Link>
          </form>
        </div>
      </section>
    )
  }
}

export default connect(({ login, alert }) => ({ login, alert }), { getLogin })(Login);
