import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TaskContext } from './TaskProvider'



export const Task = ({ task }) => {
    const { deleteTask, getTasks } = useContext(TaskContext)
    

    useEffect(() => {
        getTasks()
    }, [])

    const deleteConfirm = () => {
        if (window.confirm("Are you sure you to delete?")) {
            deleteTask(task.id)
        } else {
            
        }
    }

    return (
        <>
            <section className="task">
                <div className="task__name">
                    <Link to={`/tasks/${task.id}`}>
                        {task.name}
                    </Link>
                </div>
                <button onClick={() => deleteConfirm()}>
                    Delete task
                </button>
            </section>
        </>
    )
}

