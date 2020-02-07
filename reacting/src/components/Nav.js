import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <h3>Genius API</h3>
      <ul className="nav-links">
        <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/artists">
        <li>Artists</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
