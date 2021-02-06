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
        <TaskForm />

      </Route>
      
    </TaskDataProvider>
</>
)}


export default ApplicationViews;
