import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  background: rgb(143 102 240);
`;
export const NavList = styled.header`
  display: flex;
  margin: auto;
  gap: 15px;
`;

export const Link = styled(NavLink)`
  padding: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  &:hover,
  &:focus {
    color: #5cd3a8;
  }

  &.active {
    color: #5cd3a8;
  }
`;
