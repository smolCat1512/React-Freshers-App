// Import all required styling, import router requirements,
// header, footer and pages for use in routing
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./header";
import Footer from "./footer";
import Home from "./pages/Home";
import Transitions from "./pages/Transitions";
import CampusServices from "./pages/CampusServices";
import CampusMap from "./pages/CampusMap";
import ITServices from './pages/ITServices';
import Societies from './pages/Societies';
import LocalServices from './pages/LocalServices';
import Timetable from './pages/Timetable';
import Calendar from './pages/Calendar';

// Main App component, encompassing all required content of the
// application
class App extends Component {
  render() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/transitions" component={Transitions} />
        <Route path="/campusservices" component={CampusServices} />
        <Route path="/campusmap" component={CampusMap} />
        <Route path="/itservices" component={ITServices} />
        <Route path="/societies" component={Societies} />
        <Route path="/localservices" component={LocalServices} />
        <Route path="/timetable" component={Timetable} />
        <Route path="/calendar" component={Calendar} />
        </Switch>
      <Footer />
    </div>
    </Router>
  );
  }
}

export default App;
