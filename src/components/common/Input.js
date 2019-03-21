import React from 'react';

const Input = ({ onChange, value, type, name, placeholder, min, max }) => (
  <input onChange={(e) => onChange(e.target.value)} value={value} type={type} name={name} min={min} max={max} placeholder={placeholder} required />
)

export { Input };
