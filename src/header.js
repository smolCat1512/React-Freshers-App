import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function Header() {
    return (
      <header>
        <Link to="/">
          <a>
            <img src="images/logo.png" alt="Uni Logo" />
          </a>
        </Link>
        <Link to="/">
          <h1>EHU Freshers App</h1>
        </Link>
        <Navbar />
      </header>
    );
  }

  export default Header;