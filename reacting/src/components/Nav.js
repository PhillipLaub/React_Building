import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <Link to="/"><h1>Genius API</h1></Link>
      
      <ul className="nav-links">
        <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/songs">
        <li>Songs</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
