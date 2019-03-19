import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';

import * as actions from '../actions';

class Edit extends Component {
  state = {
    code: '',
    phone: '',
    name: ''
  }

  componentDidMount() {
    const { getPhone, match: { params: { id } } } = this.props;
    getPhone(id);
  }

  handleForm = (e) => {
    e.preventDefault();
    let { code, phone, name } = this.state;
    const { phone: phoneFromStore, match: { params: { id } }, history, updatePhone } = this.props;
    code = code ? code : phoneFromStore.phone.split('-')[0].replace('+', '');
    phone = phone ? phone : phoneFromStore.phone.split('-')[1];
    name = name ? name : phoneFromStore.name;
    const phonenumber = `+${code}-${phone}`;
    updatePhone(id, name, phonenumber, history);
  }

  renderForm = () => {
    const { phone } = this.props;

    if(phone.loading) {
      return (
        <Loader size={30} />
      )
    }

    const code = phone.phone.split('-')[0].replace('+', '');
    const onlyPhone = phone.phone.split('-')[1];
    const { name } = phone;

    return (
      <form className="form form-phonebook" onSubmit={this.handleForm}>
        <span>+</span><input onChange={({ target: { value: code } }) => this.setState({ code })} type="number" name="code" min="000" max="999" value={this.state.code || `${code}`} required />
        <input onChange={({ target: { value: phone } }) => this.setState({ phone })} type="number" name="phone" value={this.state.phone || `${onlyPhone}`} required />
        <input onChange={({ target: { value: name } }) => this.setState({ name })} type="text" name="name" value={this.state.name || `${name}`} required />
        <button className="btn btn-submit" type="submit">Update</button>
      </form>
    )
  }

  render() {
    return (
      <section className="page edit">
        <div className="edit-area">
          <div className="title">
            <Link className="home-link" to="/phonebook">Phonebook</Link>
            <h2>Edit</h2>
          </div>
          {this.renderForm()}
        </div>
      </section>
    )
  }
}

export default connect(({ phone }) => ({ phone }), actions)(Edit);
