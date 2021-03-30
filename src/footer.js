import React, { Component } from 'react';
import './App.css';

function Footer() {
    return (
      <footer>
        <h2>2021 Shaun Halliday</h2>
        <div class="footerWrapper">
          <h2>Socials:</h2>
          <a target="_blank" href="https://www.facebook.com/studentsehu">
            <img class="facebook" src="images/facebook.png" alt="Facebook link" />
          </a>
          <a target="_blank" href="https://twitter.com/StudentsEHU">
            <img class="twitter" src="images/twitter.png" alt="Twitter link" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/school/edge-hill-university">
            <img class="twitter" src="images/twitter.png" alt="Twitter link" />
          </a>
        </div>
      </footer>
    );
  }

  export default Footer;