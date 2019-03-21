import React from 'react';
import { Loader } from './';

const Button = ({ children, content }) => (
  <button className="btn btn-submit" type="submit">
    {content.loading && <Loader size={15} color="#fff" />} {children}
  </button>
)

export { Button };
