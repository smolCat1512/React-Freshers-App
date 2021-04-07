import React from 'react'
// import { useState, useEffect } from 'react'
import Task from '../components/task'


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
        <div>
          {tasks.map((task) => (
              <Task key={task.id} task={task}/>
          ))}
        </div>
    )
}

export default Tasks