import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import { FaAngleLeft } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const date = new Date();
  const newDate = `${date.getFullYear()}`;

  return (
    <nav className="navbar">
      {(location.pathname !== '/') ? (
        <Link to="/" className="back">
          <b><FaAngleLeft /></b>
        </Link>
      ) : <span className="nav-date">{newDate}</span>}
      <span className="nav-title">
        covid 19
        {location.pathname}
      </span>
      <span className="icons">
        <BiMicrophone />
        <BiCog />
      </span>
    </nav>
  );
};

export default Navbar;
