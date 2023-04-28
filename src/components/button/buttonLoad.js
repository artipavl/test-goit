import React from 'react';
import { Btn } from './button.style';

const ButtonLoad = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      Load more
    </Btn>
  );
};

export default ButtonLoad;
