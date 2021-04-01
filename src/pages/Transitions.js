import React from "react"
import '../App.css';

// Transitions page component, contains all transition 
function Transitions() {
    return (
        <main>
        <h1 className="darkbluetext">Transitions Page</h1>

        <p>Starting university is a challenging and trying time....</p>
        
        <h2 className="darkbluetext">Don't Worry</h2>

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

        <a class="booking" rel="noreferrer" target="_blank" href="https://engage2serve.edgehill.ac.uk/#/offlineBookAppointmentService/MzAx//NDE=/">Book an initial appointment - opens in a seperate window</a>

        <a class="booking" rel="noreferrer" target="_blank" href="https://engage2serve.edgehill.ac.uk/#/offlineBookAppointmentService/MzAx//NDM=/">Book a follow-up appointment - opens in a seperate window</a>

        </main>
    );
}

export default Transitions;