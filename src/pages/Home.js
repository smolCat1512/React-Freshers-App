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
                <a>Transitions Team</a>
            </Link>
            <Link to="/campusservices">
                <a>Campus Services</a>
            </Link>
            <Link to="/campusmap">
                <a>Campus Map</a>
            </Link>
            <Link to="/itservices">
                <a>IT Services</a>
            </Link>
            <Link to="/societies">
                <a>Societies</a>
            </Link>
            <Link to="/localservices">
                <a>Local Services</a>
            </Link>
            <Link to="/timetable">
                <a>Timetable</a>
            </Link>
            <Link to="/calendar">
                <a>Calendar/Schedule</a>
            </Link>
        </div>
      </section>
    );
  }

  export default Home;