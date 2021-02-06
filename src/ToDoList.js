import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { ApplicationViews } from './ApplicationViews'

export const ToDoList = () => (
    <>
        <Route render={() => {
            return (
                <>
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            )
        }} />
    </>

)

