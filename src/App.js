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

function Main() {
  return (
    <section>
      <h1>Welcome to the Edge Hill CS Freshers App</h1>
      <h2>Please select an option/service:</h2>
      <div class="homeGrid">
        <a href="transition">Transitions Team</a>
        <a href="transition">Campus Services</a>
        <a href="transition">Campus Map</a>
        <a href="transition">IT Services</a>
        <a href="transition">Societies</a>
        <a href="transition">Local Services</a>
        <a href="transition">Timetable</a>
        <a href="transition">Calendar/Schedule</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h2>©2021 Shaun Halliday</h2>
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

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
