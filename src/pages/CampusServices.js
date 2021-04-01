import React from "react"
import '../App.css';
import campusehu from '../pages/campusservices/campusehu.jpg';

function CampusServices() {
        return (
        <main>
            <h1>Campus Services Page</h1>

            <p>This is the campus service page, not all information availble is presented here.</p>
            <p>Much more information is available at:</p>
            <a target="_blank" href="https://www.edgehill.ac.uk/studentservices/campus-life-2/" 
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
            <a href="https://www.edgehill.ac.uk/coronavirus-faq/students/" 
            target="_blank" rel="noreferrer">Please click here to open latet guidance and info in a new link</a>


            <h1>Accomodation</h1>





            <a target="_blank" href="https://accommodation.apps.edgehill.ac.uk/RunFeature/RunFeature?ftl=X539cede95d474e339a6ef92b481d860c" 
            rel="noreferrer">Accomodation portal link</a>

            
            <img src={campusehu} alt="EHU Campus Life logo" height={200} width={500} />
            <h2>Campus Life EHU</h2>
            <p>Edge Hill has a Campus Life EHU department, here to help with all your campus issues.
                Providing not only guidance but support and events information.
            </p>


            <h2>Connect to CampusEHU - click the logo</h2>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/ehucampuslife">
            <img class="socials" src="images/facebook.png" alt="Facebook link" />
          </a>
        </main>
        );
    }

export default CampusServices;