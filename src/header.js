import React, { Component } from 'react';
import './App.css';

function Header() {
    return (
      <header>
        <a href="/">
        <img src="images/logo.png" alt="Uni Logo" />
        </a>
        <h1>EHU Freshers App</h1>
        <nav>Nav</nav>
      </header>
    );
  }

  export default Header;