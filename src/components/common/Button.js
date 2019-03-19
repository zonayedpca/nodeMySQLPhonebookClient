import React from 'react';
import { connect } from 'react-redux';

let Button = ({ text, login }) => {
  return (
    <button className="btn btn-submit" type="submit">
      {login.loading ? 'Loading' : `${text}`}
    </button>
  )
}

Button = connect(({ login }) => ({ login }))(Button);

export { Button };
