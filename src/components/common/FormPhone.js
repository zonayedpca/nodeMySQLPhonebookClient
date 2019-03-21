import React from 'react';

import { Input, Button } from './';

const FormPhone = ({ onSubmit, onCodeChange, onPhoneChange, onNameChange, title, value: { code, phone, name } }) => (
  <form className="form form-phonebook" onSubmit={onSubmit}>
    <span>+</span><Input onChange={onCodeChange} value={code} type="number" name="code" min="000" max="999" placeholder="Code" required />
    <Input onChange={onPhoneChange} value={phone} type="number" name="phone" placeholder="Phone" required />
    <Input onChange={onNameChange} value={name} type="text" name="name" placeholder="Name" required />
    <Button className="btn btn-submit" content={false} type="submit">{title}</Button>
  </form>
)

export { FormPhone };
