import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  margin: auto;
  width: 196px;
  height: 50px;
  border-radius: 10.3108px;

  background: ${props => (props.active ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  &:hover,
  &:focus {
    background: ${props => (props.active ? '#ebd8ff' : '#5CD3A8')};
  }
`;
