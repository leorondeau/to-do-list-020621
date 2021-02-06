import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from './TaskProvider'


export const TaskForm = (props) => {
    const { tasks, getTasks, addTask, updateTask } = useContext(TaskContext)
    const [task, setTask] = useState({})
    const editMode = props.match.params.hasOwnProperty("taskId")

    const handleControlledInputStorage = (event) => {

        const newTask = Object.assign({}, task)
        newTask[event.target.name] = event.target.value
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

    useEffect(() => {
        getTaskInEditMode()
    }, [tasks])

    const constructNewTask = () => {

        if (editMode) {
            updateTask({
                id: task.id,
                name: task.name
            })
            .then(() => props.history.push("/"))
        } else {

            addTask({
                name: task.name
            })
                .then(() => props.history.push("/"))

        }
    }
    return (
        <>
            <form className="taskForm">
                <label className="taskForm__title"></label>
                <input className="taskForm__title-name" name="name" type="text" proptype="varchar"
                    placeholder="Task To Do" value={task.name} onChange={handleControlledInputStorage} />
            </form>
            <button className="taskForm___button" onClick={tsk => {
                tsk.preventDefault()
                constructNewTask()
            }}>
                {editMode ? "Save Update" : "Save Task"}
            </button>
        </>
    )
}