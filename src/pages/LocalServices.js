// Import required library, Sass built CSS and images required
import React from "react"
import '../App.css';
import localhealthcare from '../pages/localservices/localhealthcare.jpg';


    function LocalServices() {
        return (
        <main className="fade-in">
            <h1>Local Services Page</h1>

            <img src={localhealthcare} alt="Local Services" height={300} width={500} />

            <p>If you are moving away from home to live to live closer to Edge Hill it is advised you 
                register with a local GP service( a doctor for non-uk students).</p>

            <p>Beacon Primary Care is Edge Hill University’s nominated practice and has a local site 
                situated on Railway Road in Ormskirk.</p>

            <a class="booking" target="_blank" href="https://www.beaconprimarycare.org.uk/edge-hill-students" 
            rel="noreferrer">Register with Beacon Primary Care</a>

            <p>The contact details for Becaon Primary care are:</p>
            <p><strong>Beacon Primary Care</strong></p>
            <p><strong>Railway Road Surgery</strong></p>
            <p>9-11 Railway Road</p>
            <p>Ormskirk</p>
            <p>L39 2DN</p>
            <p><strong>Tel:</strong> 01695 736000</p>

            <p>Alternatively, you will be able to find your nearest GP practice by going to the NHS website. 
                You will then need to enter your term-time postcode into the search bar.</p>

            <p>If you need medical attention during vacation or weekends away from Edge Hill, you can see any 
                GP as a temporary resident for a period of up to 12 weeks. You do not need to re-register with 
                your own GP during vacation.</p>

            <p>If you become unwell, please make an appointment to see your GP. 
                Outside of GP opening hours, please seek medical advice and attention using the services below:</p>

            <p><strong>NHS 111: call 111 free from any phone</strong></p>

            <h1>Dentists:</h1>

            <p>Dental examinations are available at Ravat and Ray Dental Practice based in the West Lancashire Health 
                Centre, Ormskirk District General Hospital – to make an appointment call <strong>01695 578019</strong></p>

            <h1>Local Pharmacies:</h1>

            <h2><strong>Aspire Pharmacy</strong></h2>
            <p><strong>Tel:</strong> 01695 580022</p>
            <p><strong>Address:</strong> 9 Railway Road, Ormskirk, Lancashire, L39 2DN</p>
            
            <h2><strong>Ormskirk Pharmacy</strong></h2>
            <p><strong>Tel:</strong> 01695 580655</p>
            <p><strong>Address:</strong> 4 Derby Street, Ormskirk, Lancashire, L39 2BY</p>

            <h2>Edge Hill University - A tour of Ormskirk video:</h2>
            <iframe width="600" height="350"
            src="https://www.youtube.com/embed/72IwpoK8pkY" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            
            <div className="footerspacer"></div>
        </main>
        );
    }

export default LocalServices;