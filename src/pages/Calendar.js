import React from "react"
import '../App.css';
import Tasks from '../components/tasks'
import { useState } from 'react'

const onClick = () => {
    console.log('working');
}

    function Calendar() {
            const [tasks, setTasks] = useState([
                {
                    id: 1,
                    text: "Visit Catalyst for Andy Clarke book",
                    day: "Monday 20th April at 10am",
                    reminder: true
                }
            ])

        
        return (
        <main className="fade-in">
            <h1>Reminders Page</h1>

            <div className="taskSetter">

            <p>Want to set a task? Click the button!</p>

            <button onClick={onClick}>Add</button>

            </div>

            <Tasks tasks={tasks} />

        </main>
        );
    }

export default Calendar;