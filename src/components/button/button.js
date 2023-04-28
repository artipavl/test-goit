import React from 'react';
import { Btn } from './button.style';

const Button = ({ onClick, active }) => {
  return (
    <Btn active={active} type="button" onClick={onClick}>
      {active ? 'Following' : 'Follow'}
    </Btn>
  );
};

export default Button;
