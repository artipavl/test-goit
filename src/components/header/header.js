import React from 'react';
// import { NavLink } from 'react-router-dom';
import { HeaderDiv, Link, NavList } from './header.style';

const Header = () => {
  return (
    <HeaderDiv>
      <nav>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tweet">Tweets</Link>
          </li>
        </NavList>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
