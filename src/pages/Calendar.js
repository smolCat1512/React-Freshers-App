import React from "react"
import '../App.css';
import Tasks from '../components/Tasks'
import { useState, useEffect } from 'react'
import AddTasks from '../components/AddTask'

    function Calendar() {

        const [showAddTask] = useState(true)
        const [tasks, setTasks] = useState([])

        useEffect(() => {
            const getTasks = async () => {
                const tasksFromServer = await fetchTasks()
                setTasks(tasksFromServer)
            }
            getTasks()
        }, [])

        // Fetch Reminders/Tasks
        const fetchTasks = async () => {
            const res = await fetch('http://localhost:5000/tasks')
                const data = await res.json()

        return data
    }

    // Add Task
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


        // const id = Math.floor(Math.random()* 10000 + 1)
        // const newTask = { id, ...task}
        // setTasks([...tasks, newTask])
    }

    // Delete Task
            const deleteTask = async (id) => {
                await fetch(`http://localhost:5000/tasks/${id}`, {
                    method: 'DELETE'
                })

                setTasks(tasks.filter((task) => task.id !== id))
            }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
    }

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