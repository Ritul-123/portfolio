
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../asset/logo.png";

const Nav = () => {
  return (
    <>
 <nav className='navbar'>
     <img src={logo} alt="logo" className="logo"></img>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
    </>
   
  );
};

export default Nav;
