import React from 'react'
import { Route } from 'react-router-dom'
import { TaskForm } from './components/task/TaskForm'
import { TaskList } from './components/task/TaskList'
import { TaskDataProvider } from './components/task/TaskProvider'



export const ApplicationViews = (props) => {
  return (

    <>
      <TaskDataProvider>
        <Route exact path="/">
          <TaskList />
        </Route>
        <Route exact path="/" render={(props) => {
          return <TaskForm {...props} />
        }} />
        <Route path="/:taskId(\d+)" render={
          props => <TaskForm {...props} />
        } />
      </TaskDataProvider>
    </>
  )
}


export default ApplicationViews;
