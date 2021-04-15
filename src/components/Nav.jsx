import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/photos">Photos</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

