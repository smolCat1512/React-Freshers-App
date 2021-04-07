import React from "react"
import '../App.css';
import Tasks from '../components/Tasks'
import { useState } from 'react'
import AddTasks from '../components/AddTask'

    function Calendar() {

            const [showAddTask, setShowAddTask] = useState(true)
            const [tasks, setTasks] = useState([
                {
                    id: 1,
                    text: "Visit Catalyst for Andy Clarke book",
                    day: "Monday 20th April at 10am",
                    reminder: true
                }
            ])

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random()* 10000 + 1)
        const newTask = { id, ...task}
        setTasks([...tasks, newTask])
    }

    // Delete Task
            const deleteTask = (id) => {
                setTasks(tasks.filter((task) => task.id !== id))
            }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
    }

        return (
        <main className="fade-in">
            <h1>Reminders Page</h1>

            {/* <Head title='Reminder Tracker'/> */}

            {/* <Head onAdd={() => setShowAddTask(!showAddTask)} /> */}

            {/* <button onAdd={() => setShowAddTask(!showAddTask)} 
            onClick={onAdd} >Add</button> */}

            <div className="taskSetter">

            {showAddTask && <AddTasks onAdd={addTask}/>}

            </div>

            {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : ( <p>No reminders to show</p> )}

            <div className="footerspacer"></div>

        </main>
        );
    }

export default Calendar;