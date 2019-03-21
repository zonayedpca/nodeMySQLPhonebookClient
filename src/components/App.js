import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppRoute } from '../components';
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
      <div className="App">
        <AppRoute />
        <Footer />
      </div>
    );
  }
}

export default connect(null, { userLoggedIn })(App);
