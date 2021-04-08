import React from "react"
import '../App.css';
import Tasks from '../components/Tasks'
import { useState, useEffect } from 'react'
import AddTasks from '../components/AddTask'

    function Calendar() {

        // set tasks to show on load, and set tasks for use
        const [showAddTask] = useState(true)
        const [tasks, setTasks] = useState([])

        // Functionality to retrieve tasks on user actions
        useEffect(() => {
            const getTasks = async () => {
                const tasksFromServer = await fetchTasks()
                setTasks(tasksFromServer)
            }
            getTasks()
        }, [])

    // Fetch Reminders/Tasks from file server json file
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()

        return data
    }

    // Fetch single task from file server json file
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
            const data = await res.json()

        return data
    }

    // Add Task functionality
    const addTask = async (task) => {
        const res = await fetch(`http://localhost:5000/tasks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()

        setTasks([...tasks, data])
    }

    // Delete Task functionality
            const deleteTask = async (id) => {
                await fetch(`http://localhost:5000/tasks/${id}`, {
                    method: 'DELETE'
                })

                setTasks(tasks.filter((task) => task.id !== id))
            }

    // Toggle Reminder functionality
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method:'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })

        const data = await res.json()

        setTasks(tasks.map((task) => 
        task.id === id ? { ...task, reminder:
            data.reminder } : task ))
    }

        // Main page return content
        return (
        <main className="fade-in">
            <h1>Reminders Page</h1>

            <div className="taskSetter">

            {showAddTask && <AddTasks onAdd={addTask}/>}

            </div>

            {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : ( <p>No reminders to show</p> )}

            <div className="footerspacer"></div>

        </main>
        );
    }

export default Calendar;