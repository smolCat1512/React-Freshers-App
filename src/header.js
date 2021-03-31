import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
    return (
      <header>
        <a href="/">
        <img src="images/logo.png" alt="Uni Logo" />
        </a>
        <h1>EHU Freshers App</h1>
        <Navbar />
      </header>
    );
  }

  export default Header;