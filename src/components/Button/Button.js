import React from 'react';
import Switch from 'react-switch';

const Button = ({ title, checked, handleChange }) => {
  return (
    <div>
      <p>{title}</p>
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
};

export default Button;
