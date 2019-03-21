import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Section, Area, FormPhone, Loader } from '../components/common';

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
    const value = {
      code: this.state.code || code,
      phone: this.state.phone || onlyPhone,
      name: this.state.name || name
    }

    return (
      <FormPhone
        title="Update"
        value={value}
        onSubmit={this.handleForm}
        onCodeChange={(code) => this.setState({ code })}
        onPhoneChange={(phone) => this.setState({ phone })}
        onNameChange={(name) => this.setState({ name })}
      />
    )
  }

  render() {
    return (
      <Section className="edit">
        <Area className="edit-area" backBtn="Home" backLink="/" title="Edit">
          {this.renderForm()}
        </Area>
      </Section>
    )
  }
}

export default connect(({ phone }) => ({ phone }), actions)(Edit);
