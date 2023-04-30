import { Btn } from './button.style';

const Button = ({ onClick, active, disabled = 'false' }) => {
  return (
    <Btn disabled={disabled} active={active} type="button" onClick={onClick}>
      {disabled ? 'Loading...' : active ? 'Following' : 'Follow'}
    </Btn>
  );
};

export default Button;
