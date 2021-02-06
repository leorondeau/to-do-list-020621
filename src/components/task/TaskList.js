import React, {useEffect, useContext} from 'react'
import { TaskContext } from './TaskProvider'
import { Task }  from './Task'



export const TaskList = ({props}) => {
    const {tasks, getTasks} = useContext(TaskContext)

    useEffect(() =>{
        getTasks()
    }, [])
console.log("tasks", tasks)
    return (
        <>
        <section>
            <div>
                {
                    tasks.map(t => <Task key={t.id} task={t} /> )
                }
            </div>
        </section>
        </>

    )

}