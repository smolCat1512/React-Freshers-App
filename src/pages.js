import React from "react"
import './App.css';
import { Link } from 'react-router-dom';

export function Home() {
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

export function Transitions() {
    return (
        <section>
        <h1>Transitions Team Page</h1>
        </section>
    );
    }


    export function CampusServices() {
        return (
        <section>
            <h1>Campus Services Page</h1>
        </section>
        );
    }

    export function CampusMap() {
        return (
        <section>
            <h1>Campus Map Page</h1>
        </section>
        );
    }

    export function ITServices() {
        return (
        <section>
            <h1>IT Services Page</h1>
        </section>
        );
    }

    export function Societies() {
        return (
        <section>
            <h1>Societies Page</h1>
        </section>
        );
    }

    export function LocalServices() {
        return (
        <section>
            <h1>Local Services Page</h1>
        </section>
        );
    }

    export function Timetable() {
        return (
        <section>
            <h1>Timetable Page</h1>
        </section>
        );
    }

    export function Calendar() {
        return (
        <section>
            <h1>Calendar Page</h1>
        </section>
        );
    }