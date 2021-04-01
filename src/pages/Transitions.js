import React from "react"
import '../App.css';
import transitions from '../pages/transitions/transitions.jpg';

// Transitions page component, contains all transition page content
function Transitions() {
    return (
        <main>
        <h1>Transitions Page</h1>

        <img src={transitions} alt="Students walking across a bridge" height={200} width={500}/>

        <p>Starting university is a challenging and trying time....</p>
        
        <h2>Don't Worry</h2>

        <p>If you feel overwhelmed in any way don't worry, you are not on your own,
             common problems students feel are:</p>
        
        <ul>
           <li>You’ve not made friends.</li>
           <li>You don’t like your course.</li>
           <li>You are worried about money.</li>
           <li>You feel like you can’t cope.</li>
           <li>Uni life isn’t what you expected.</li>
           <li>You want to be closer to home.</li>
        </ul>

        <h1 className="darkbluetext">You can speak to the Transitions Team</h1>

        <p>Due to the ongoing caronavirus pandemic advice and appointments are on a virtual basis:</p>

        <h1>Book:</h1>

        <a class="booking" target="_blank" href="https://engage2serve.edgehill.ac.uk/#/offlineBookAppointmentService/MzAx//NDE=/" rel="noreferrer">Book an initial appointment - opens in a seperate window</a>

        <a class="booking" target="_blank" href="https://engage2serve.edgehill.ac.uk/#/offlineBookAppointmentService/MzAx//NDM=/" rel="noreferrer">Book a follow-up appointment - opens in a seperate window</a>

        <h2>Support available includes:</h2>

        <ul>
            <li>Emotional and wellbeing support.</li>
            <li>Help with making friends and feeling involved in uni life.</li>
            <li>Support with any health issue (mental or physical).</li>
            <li>Study skills and learning support.</li>
            <li>Financial support and advice.</li>
            <li>Support with accommodation.</li>
            <li>Careers and job-hunting advice.</li>
        </ul>

        <a target="_blank" href="https://www.edgehill.ac.uk/studentservices/files/2020/10/Student-Overview-of-Support-5.10.20.pdf" rel="noreferrer">Click here for an overview of support available.</a>

        <div className="footerspacer"></div>

        </main>
    );
}

export default Transitions;