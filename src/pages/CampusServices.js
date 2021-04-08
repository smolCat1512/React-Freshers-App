import React from "react"
import '../App.css';
import campusehu from '../pages/campusservices/campusehu.jpg';
import campusmain from '../pages/campusservices/campusmain.jpg'

function CampusServices() {
        return (
        <main className="fade-in">

            <a className="backtohome" href="/">Back to home</a>

            <h1>Campus Services Page</h1>

            <img src={campusmain} alt="Edge Hill main campus building" height={200} width={500} />

            <p>This is the campus service page, not all information available is presented here. This page contains
                advice and links to report critical incidents, the latest covid guidance, accommodation links,
                campus life EHU team information, and an inclusions team link.
            </p>

            <p>The below video is an overview of campus video produced by Edge Hill to show the beautiful
                campus and facilities available.
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/NwHgf3kzdVw" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

            <p>Much more information regarding the facilities and campus is available at:</p>
            <a className="mobile-left-margin" target="_blank" 
            href="https://www.edgehill.ac.uk/studentservices/campus-life-2/" 
            rel="noreferrer">Edge Hill Student Services</a>

            <h1>Critical Incident Reporting</h1>

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

            <p>Edge Hill has a dedicated accommodation team; this team not only helps with on campus
                accommodation but also off campus.
            </p>

            <p>There are a wide range of services available, whether living in halls, off campus privately,
                updates on coronavirus limitations or help with accommodation, reporting issues and lots more.
            </p>

            <p>The link to see these services is here -</p>
            

            <a target="_blank" className="mobile-left-margin"
            href="https://www.edgehill.ac.uk/studentservices/accommodation/" rel="noreferrer">
                Accomodation services link</a>

            <p>The accommodation portal link can be accessed directly using the below link -</p>

            <a className="mobile-left-margin" target="_blank" href="https://www.edgehill.ac.uk/services/campus-accommodation/" 
            rel="noreferrer">Accomodation portal link</a>
            
            <h2>Campus Life EHU</h2>
            <a href="https://www.edgehill.ac.uk/studentservices/campus-life-2/">
            <img className="removeleftmargin" src={campusehu} alt="EHU Campus Life logo" height={200} width={500} />
            </a>
            <p>Edge Hill has a Campus Life EHU department, here to help with all your campus issues.
                Providing not only guidance but support and events information.
            </p>

            <h2>Connect to CampusEHU on Facebook - click the logo</h2>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/ehucampuslife">
                <img class="socials mobile-left-margin" src="images/facebook.jpg" alt="Facebook link" />
            </a>

            <h1>Inclusions Team</h1>

            <p>The Inclusions Team provide information, guidance and support to applicants and students who
                 have disclosed any of the following disabilities: Autism Spectrum Conditions (ASC), 
                 Mental Health, Sensory Impairment, Mobility difficulties or a medical condition e.g., Epilepsy, 
                 Diabetes, Heart Condition, Severe Asthma and we work closely with academic and support staff 
                 across the University.</p>

            <p>The breadth and depth of support provided is far too much to go into on this application, and as
                always when seeking mental health or health support it is best to speak to professionals. The
                inclusions team can be contacted by email at inclusionteam@edgehill.ac.uk, but please click the
                 link below for access to all the services, and information on how to access these services:
            </p>
            <a className="mobile-left-margin" rel="noreferrer" target="_blank" 
            href="https://www.edgehill.ac.uk/studentservices/inclusive/?tab=inclusion">Inclusions Team Link</a>

          <div className="footerspacer"></div>

        </main>
        );
    }

export default CampusServices;