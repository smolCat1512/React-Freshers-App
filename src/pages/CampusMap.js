import React from "react"
import '../App.css';

    function CampusMap() {
        return (
        <main className="fade-in">

            <a className="backtohome" href="/">Back to home</a>

            <h1>Campus Map Page</h1>

            <p>Edge Hill University’s stunning campus is located in the heart of the North West, 
                close to the thriving market town of Ormskirk and a short distance from Liverpool, 
                Southport and Manchester.
            </p>

            <p>The campus has been voted top in the North West and in the top five in the UK for 
                University facilities (WhatUni Student Choice Awards 2020) and top in the North West 
                for learning resources (National Student Survey 2020). It has been named as the Safest 
                Campus/ Safest University Town in the North West for nine consecutive years (Complete 
                University Guide 2020) and also has been recognised as one of the top five campuses in the 
                UK (StudentCrowd 2018) and one of the world’s best green spaces (Green Flag Award 2020).
            </p>

            <h2>Campus Tour Video</h2>
            
            <iframe width="600" height="350" src="https://www.youtube.com/embed/4eRe-jW9PHk" 
            title="Edge Hill University Campus Tour Video" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

            <h2>Campus Map Link</h2>

            <a className="mobile-left-margin" target="_blank" href="https://www.edgehill.ac.uk/documents/files/ormskirk-campus-map.pdf" rel="noreferrer">Campus map link (opens in a new window)</a>

            <p>There is also a campus guide/map available at the following link:</p>

            <a className="mobile-left-margin" target="_blank" href="https://issuu.com/edge_hill_university/docs/edge_hill_-_returning_to_campus_guide_digital_fa?fr=sZWE4MzUzNjk3" rel="noreferrer">Campus guide link (opens in a new window)</a>
            
            <div className="footerspacer"></div>
        </main>

        
        );
    }

export default CampusMap;