import React from 'react';
import { Link } from 'react-router-dom';

const Area = ({children, backBtn, backLink, title }) => (
  <div>
    <div className="title">
      <Link className="home-link" to={`${backLink}`}>{backBtn}</Link>
      <h2>{title}</h2>
    </div>
    {children}
  </div>
)

export { Area };
