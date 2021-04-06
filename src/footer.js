import React from 'react';
import './App.css';

function Footer() {
    return (
      <footer>
        <h2>	&#169; 2021 Shaun Halliday</h2>
        <div class="footerWrapper">
          <h2>Socials:</h2>
          <a rel="noreferrer" target="_blank" href="https://www.facebook.com/studentsehu">
            <img class="socials" src="/images/facebook.jpg" alt="Facebook link" />
          </a>
          <a rel="noreferrer" target="_blank" href="https://twitter.com/StudentsEHU">
            <img class="socials" src="/images/twitter.jpg" alt="Twitter link" />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/school/edge-hill-university">
            <img class="socials" src="/images/linkedin.jpg" alt="LinkedIn link" />
          </a>
        </div>
      </footer>
    );
  }

  export default Footer;