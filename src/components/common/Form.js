import React from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from './';

const Form = ({ onSubmit, onUserNameChange, onPasswordChange, title, value, altLink, altBtn, content }) => (
  <form onSubmit={onSubmit}>
    <Input onChange={onUserNameChange} value={value.username} type="text" name="username" placeholder="Username" />
    <Input onChange={onPasswordChange} value={value.password} type="password" name="password" placeholder="Password" />
    <Button content={content}>
      {title}
    </Button>
    <Link className="btn btn-alternate" to={`/${altLink}`}>{altBtn}</Link>
  </form>
)

export { Form };
