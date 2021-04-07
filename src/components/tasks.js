import React from 'react'
import { useState, useEffect } from 'react'

const Tasks = ({ tasks }) => {
    
    // const [tasks, setTasks] = useState([])

    // useEffect( () =>{
    //     const getTasks = async() => {
    //         const tasksFromServer = await fetchTasks()
    //         setTasks(tasksFromServer)
    //     }
    //     fetchTasks()
    // }, [])

    // // Fetch Tasks
    // const fetchTasks = async () => {
    //     const res = await fetch('http://localhost:5000/tasks')
    //     const data = await res.json()
    //     return data
    // }
    
    return (
        <div className="task">
          {tasks.map((task) => (
          <h2>{task.text + ' ' + task.day}</h2>
          ))}
        </div>
    )
}

export default Tasks