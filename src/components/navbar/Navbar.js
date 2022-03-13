import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineFormatPaint } from 'react-icons/md';
import { FaAngleLeft } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const date = new Date();
  const newDate = `${date.getFullYear()}`;
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    if (!theme) {
      document.documentElement.style.setProperty('--pink-primary', '#ec4c8a');
      document.documentElement.style.setProperty('--pink-light', '#fd5193');
      document.documentElement.style.setProperty('--pink-dark', '#ce4176');
      document.documentElement.style.setProperty('--pink-darker', '#a32656');
      document.documentElement.style.setProperty('--blue-light', '#5687E4');
    } else {
      document.documentElement.style.setProperty('--pink-primary', '#4369B2');
      document.documentElement.style.setProperty('--pink-light', '#5687E3');
      document.documentElement.style.setProperty('--pink-dark', '#3F62A5');
      document.documentElement.style.setProperty('--pink-darker', '#2D4573');
      document.documentElement.style.setProperty('--blue-light', '#fd5194');
    }
    setTheme(!theme);
  };

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
        <MdOutlineFormatPaint onClick={changeTheme} />

      </span>
    </nav>
  );
};

export default Navbar;
