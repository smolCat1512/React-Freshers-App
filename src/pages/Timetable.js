import React from "react"
import '../App.css';
import TimetableData from '../pages/timetable/timetable.json';
import timetable from '../pages/timetable/timetable.jpg';

    function Timetable() {
        return (
        <main className="fade-in">
            <h1>Timetable Page</h1>

            <img src={timetable} alt="Timetable" height={500} width={400} />

            <p>Welcome to the timetables page.</p>

            <p>Here the structure is course title, the modules in each course, the days
                each module is taught, the times and finally the rooms held in. PS - 
                All courses do the same modules in the first year so you can ignore
                the modules tab on each if you like &#x1F602;
            </p>

            {TimetableData.map((timetableDetail)=> {
                return<div className="timetableFlex">
                            <div className="timetableItem">
                                <h1>Course: {timetableDetail.course}</h1>
                                <h2>Modules:</h2>
                                <p>{timetableDetail.modules}</p>
                                <h2>Days:</h2>
                                <p>{timetableDetail.days}</p>
                                <h2>Times:</h2>
                                <p>{timetableDetail.times}</p>
                                <h2>Rooms:</h2>
                                <p>{timetableDetail.rooms}</p>
                            </div>
                        </div>
            })}

            <div className="footerspacer"></div>

        </main>


        );
    }

export default Timetable;