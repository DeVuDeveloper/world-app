import React from 'react';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">

    <span className="nav-date">{}</span>

    <span className="nav-title">
      covid 19
      {}
    </span>
    <span className="icons">
      <BiMicrophone />
      <BiCog />
    </span>
  </nav>
);

export default Navbar;
