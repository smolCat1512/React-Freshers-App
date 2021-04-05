import React from "react"
import '../App.css';
import { Link } from 'react-router-dom';

// Home page component, contains all the home page content

function Home() {
    return (
      <section>
        <h1>Welcome to the Edge Hill CS Freshers App</h1>
        <h2>Please select an option/service:</h2>
        <div class="homeGrid">
            <Link to="/transitions">
                <p>Transitions Team</p>
            </Link>
            <Link to="/campusservices">
                <p>Campus Services</p>
            </Link>
            <Link to="/campusmap">
                <p>Campus Map</p>
            </Link>
            <Link to="/itservices">
                <p>IT Services</p>
            </Link>
            <Link to="/societies">
                <p>Societies</p>
            </Link>
            <Link to="/localservices">
                <p>Local Services</p>
            </Link>
            <Link to="/timetable">
                <p>Timetable</p>
            </Link>
            <Link to="/calendar">
                <p>Calendar/Schedule</p>
            </Link>
        </div>
        <div className="footerspacer"></div>
      </section>
    );
  }

  export default Home;