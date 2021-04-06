import React from "react"
import '../App.css';
import SocietiesData from '../pages/societies/societies.json';

    function Societies() {
        return (
        <main>
            <h1>Societies Page</h1>

            <p>There are many societies at Edge Hill University, the full list can be found at the below
                link, but also see below for a selection of societies available at Edge Hill.
            </p>


            <h2>Selected Societies:</h2>

            {SocietiesData.map((societiesDetail, index)=> {
                return<div className="societiestopmargin">
                        <img src={societiesDetail.image } width="200" height="200" alt={societiesDetail.title + " logo"} />
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