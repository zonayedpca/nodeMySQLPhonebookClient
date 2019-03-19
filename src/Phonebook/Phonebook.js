import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';

import * as actions from '../actions';

class Phonebook extends Component {
  state = {
    code: '',
    phone: '',
    name: ''
  }

  componentWillMount() {
    const { getPhonebook } = this.props;
    getPhonebook();
  }

  componentWillUnmount() {
    const { clearAlert } = this.props;
    clearAlert();
  }

  handleForm = (e) => {
    e.preventDefault();
    const { getPhonebook, newPhone } = this.props;
    const { code, phone: p_phone, name } = this.state;
    const phone = `+${code}-${p_phone}`;
    newPhone(name, phone, getPhonebook);
    this.setState({ code: '', phone: '', name: '' });
  }

  handleDelete = id => {
    const { deletePhone, history } = this.props;
    deletePhone(id, history);
  }

  renderPhonebook() {
    const { phonebook } = this.props;

    if(phonebook.loading) {
      return <Loader size={50} />
    }

    if(!phonebook.data.length) {
      return <p>No Record Found!</p>
    }

    return (
      <ul>
          { phonebook.data.map(phone => (
            <li key={phone.id}>
              <h5>{phone.name} <Link className="edit-link" to={`/phonebook/${phone.id}/edit`}>edit</Link></h5>
              <p>{phone.phone}</p>
              <div className="action-btn">
                <button onClick={this.handleDelete.bind(this, phone.id)}>delete</button>
              </div>
            </li>
          )) }
      </ul>
    )
  }

  render() {
    const { getLogout, history, alert } = this.props;
    return (
      <section className="page login">
        <div className="login-area">
          <div className="title">
            <Link className="home-link" to="/">Home</Link>
            <h2>Phonebook</h2>
          </div>
          { alert && <p className={`alert alert-${alert.type}`}>{alert.msg}</p>}
          <form className="form form-phonebook" onSubmit={this.handleForm}>
            <span>+</span><input onChange={(e) => this.setState({ code: e.target.value })} value={this.state.code} type="number" name="code" min="000" max="999" placeholder="Code" required />
            <input onChange={(e) => this.setState({ phone: e.target.value })} value={this.state.phone} type="number" name="phone" placeholder="Phone" required />
            <input onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} type="text" name="name" placeholder="Name" required />
            <button className="btn btn-submit" type="submit">Add</button>
          </form>
          <div className="phonebook">
            {this.renderPhonebook()}
          </div>
          <button onClick={() => getLogout(history)} className="btn btn-logout">Logout?</button>
        </div>
      </section>
    )
  }
}

export default connect(({ alert, phonebook }) => ({ alert, phonebook }), actions)(Phonebook);
