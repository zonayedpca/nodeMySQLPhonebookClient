import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Section, Area, FormPhone, Loader } from '../components/common';

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
    const { code, phone, name } = this.state;
    const { getLogout, history, alert } = this.props;
    return (
      <Section name="login">
        <Area className="login-area" backBtn="Home" backLink="/" title="Phonebook">
          { alert && <p className={`alert alert-${alert.type}`}>{alert.msg}</p>}
          <FormPhone
            title="Add"
            value={{code, phone, name}}
            onSubmit={this.handleForm}
            onCodeChange={(code) => this.setState({ code })}
            onPhoneChange={(phone) => this.setState({ phone })}
            onNameChange={(name) => this.setState({ name })}
          />
          <div className="phonebook">
            {this.renderPhonebook()}
          </div>
          <button onClick={() => getLogout(history)} className="btn btn-logout">Logout?</button>
        </Area>
      </Section>
    )
  }
}

export default connect(({ alert, phonebook }) => ({ alert, phonebook }), actions)(Phonebook);
