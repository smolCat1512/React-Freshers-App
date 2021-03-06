import React from "react"
import '../App.css';
import SocietiesData from '../pages/societies/societies.json';

    function Societies() {
        return (
        <main className="fade-in">

            <a className="backtohome" href="/">Back to home</a>

            <h1>Societies Page</h1>

            <p>There are many societies at Edge Hill University, the full list can be found at the below
                link, but also see below for a selection of societies available at Edge Hill.
            </p>

            <a className="mobile-left-margin" rel="noreferrer" target="_blank" 
            href="https://www.edgehillsu.org.uk/groups">
                Societies Link to SU site</a>

            <h2>Selected Societies:</h2>

            {SocietiesData.map((societiesDetail)=> {
                return<div className="societiestopmargin">
                        <img className="societiesLogos" src={societiesDetail.image } width="200" height="200" alt={societiesDetail.title + " logo"} />
                        <h2>{societiesDetail.title}</h2>
                        <p>{societiesDetail.description}</p>
                        <p>Meetings: {societiesDetail.meetings}</p>
                        <p>Socials: {societiesDetail.social}</p>
                </div>
            })}







            <div className="footerspacer"></div>

        </main>
        );
    }

export default Societies;