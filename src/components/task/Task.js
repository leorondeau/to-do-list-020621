import React, { useContext, useEffect }from 'react'
import { Link } from 'react-router-dom'
import { TaskContext } from './TaskProvider'



export const Task = ({ task }) => {
    const { deleteTask, getTasks } = useContext(TaskContext)
    console.log("task" , task)
    
    useEffect(() => {
        getTasks()
    },[])


    return (
        <>
            <section className="task">
                <div className="task__name">
                    <Link to={`/${task.id}`}>
                        {task.name}
                    </Link>
                </div>
                <button onClick={()=> deleteTask(task.id)}>
                    Delete Task
                </button>
            </section>
        </>
    )
}

