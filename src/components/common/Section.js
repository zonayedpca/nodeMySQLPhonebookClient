import React from 'react';

const Section = ({ children, name }) => (
  <section className={`page ${name}`}>
    {children}
  </section>
)

export { Section };
