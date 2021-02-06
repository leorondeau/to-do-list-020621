import React, { useState } from 'react'

export const TaskContext = React.createContext()

export const TaskDataProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {

        return fetch("http://localhost:8088/tasks")
            .then(res => res.json()
            )
            .then(setTasks)
    }

    const addTask = (task) => {

        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)

        })
        .then(getTasks)
    }

    const deleteTask = (task) => {

        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "DELETE",            
        })
        .then(getTasks)
    }

    const updateTask = (task) => {
        return fetch (`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(getTasks)
    }


    return (
        <TaskContext.Provider value={{
            tasks, getTasks, setTasks, addTask, deleteTask, addTask, updateTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )


}


