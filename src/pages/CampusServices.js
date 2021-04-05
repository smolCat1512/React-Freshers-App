import React from "react"
import '../App.css';
import campusehu from '../pages/campusservices/campusehu.jpg';
import campusmain from '../pages/campusservices/campusmain.jpg'

function CampusServices() {
        return (
        <main>
            <h1>Campus Services Page</h1>

            <img src={campusmain} alt="Edge Hill main campus building" height={200} width={500} />


            <p>This is the campus service page, not all information available is presented here.</p>

            <p>The below video is an overview of campus video produced by Edge Hill to show the beautiful
                campus and facilities availble.
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/NwHgf3kzdVw" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

            <p>Much more information regarding the facilities and campus is available at:</p>
            <a className="mobile-left-margin" target="_blank" 
            href="https://www.edgehill.ac.uk/studentservices/campus-life-2/" 
            rel="noreferrer">Edge Hill Student Services</a>

            <h2>Critical Incident Reporting</h2>

            <p>If you have an urgent emergency (medical, police, fire) phone <strong>999.</strong></p>

            <p>If you need assistance and you are on campus, Campus Support are available 24 hours a day, 365 days a year on <strong>01695 584227.</strong></p>

            <h1>Latest Covid-19 guidance</h1>
            <p>As the situation regarding the coronavirus pandemic advances and changes
                it is imperative to be aware of the latest guidance and requirements.
            </p>
            <p>Guidance is provided for you by Edge Hill as soon as possible, but we all need
                to play our part. If you have symptoms tests and support is available, the
                latest information is available through the below link:
            </p>
            <a className="mobile-left-margin" href="https://www.edgehill.ac.uk/coronavirus-faq/students/" 
            target="_blank" rel="noreferrer">Latest guidance link - please click</a>

            <h1>Accomodation</h1>

            <p>Edge Hill has a dedicated accommodation team, this team not only helps with on campus
                accommodation but also off campus.
            </p>


            <a className="mobile-left-margin" target="_blank" href="https://accommodation.apps.edgehill.ac.uk/RunFeature/RunFeature?ftl=X539cede95d474e339a6ef92b481d860c" 
            rel="noreferrer">Accomodation portal link</a>


            
            <h2>Campus Life EHU</h2>
            <a href="https://www.edgehill.ac.uk/studentservices/campus-life-2/">
            <img className="removeleftmargin" src={campusehu} alt="EHU Campus Life logo" height={200} width={500} />
            </a>
            <p>Edge Hill has a Campus Life EHU department, here to help with all your campus issues.
                Providing not only guidance but support and events information.
            </p>


            <h2>Connect to CampusEHU - click the logo</h2>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/ehucampuslife">
            <img class="socials" src="images/facebook.png" alt="Facebook link" />
          </a>

          <div className="footerspacer"></div>

        </main>
        );
    }

export default CampusServices;