import React from 'react';
import { Btn } from './button.style';

const ButtonLoad = ({ onClick, disabled = 'false' }) => {
  return (
    <Btn disabled={disabled} type="button" onClick={onClick}>
      {disabled ? 'Loading...' : 'Load more'}
    </Btn>
  );
};

export default ButtonLoad;
