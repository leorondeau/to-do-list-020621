import React from 'react'

export const Task = ({task}) => {
    return (
        <>
        <section className="task">
            <div className="task__name"> {task.name}</div>
        </section>
        </>
    )
}

