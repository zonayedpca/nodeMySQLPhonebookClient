import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ size, color }) => {
  return (
    <ClipLoader
      sizeUnit={"px"}
      size={size || 150}
      color={color || '#000'}
    />
  )
}

export { Loader };
