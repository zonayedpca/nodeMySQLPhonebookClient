import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from '../Home/';
import Login from '../LoginPage/Login';
import Register from '../Register/Register';
import { Phonebook } from '../Phonebook';
import Edit from '../Phonebook/Edit';
import { PublicRoute, PrivateRoute } from '../components';
import Footer from '../Footer';

import { userLoggedIn } from '../actions';

import '../App.css';

class App extends Component {
  componentWillMount() {
    const { userLoggedIn } = this.props;
    userLoggedIn();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <PrivateRoute exact path="/phonebook" component={Phonebook} />
          <PrivateRoute exact path="/phonebook/:id/edit" component={Edit} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { userLoggedIn })(App);
