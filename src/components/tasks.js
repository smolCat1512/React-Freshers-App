import React from 'react'
// import { useState, useEffect } from 'react'
import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) => {

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
        <div>
          {tasks.map((task) => (
              <Task 
              key={task.id} 
              task={task}
              onDelete={onDelete}
              onToggle={onToggle} />
          ))}
        </div>
    )
}

export default Tasks