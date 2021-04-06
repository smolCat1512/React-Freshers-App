import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <Link to="/">
          <a href="/">
            <img src="images/logo.jpg" alt="Uni Logo" />
          </a>
        </Link>
        <Link to="/">
          <h1>EHU Freshers App</h1>
        </Link>
      </header>
    );
  }

  export default Header;