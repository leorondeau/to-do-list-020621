import React, {useContext, useEffect, useState} from 'react'
import { TaskContext } from './TaskProvider'


export const TaskForm = (props) => {
    const { tasks, getTasks, addTask, updateTask } = useContext(TaskContext)
    const [task, setTask] = useState({})
    const editMode = props.match.params.hadOwnProperty("taskId")

    const handleControlledInputStorage = (t) => {

        const newTask = Object.assign({}, task)
        newTask[t.target.name] = t.target.value 
        setTask(newTask)

    }

    const getTaskInEditMode = () => {
        
        if (editMode) {
            const taskId = parseInt(props.match.params.taskId)
            const selectedTask = tasks.find(t => t.id === taskId) 
            setTask(selectedTask)
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    const constructNewTask = () => {
        const name = task.name
        
        addTask ({
            name
        })
    }

    return (
        <>
        <form className="taskForm">
            <label className="taskForm__title"></label>
            <input className="taskForm__title-name" name="title" proptype="varchar" 
            placeholder="Task To Do" value={task.name} onChange={handleControlledInputStorage}/>
        </form>
        <button className="taskForm___button" onClick={tsk => {
            tsk.preventDefault()
            constructNewTask()
        }}>
            Save
        </button>
        </>
    )
}