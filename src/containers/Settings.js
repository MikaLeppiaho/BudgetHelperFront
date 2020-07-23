import React from 'react'
import "./Home.css"
import { useAppContext } from '../libs/contextLib'
import SettingsForm from '../forms/SettingsForm'


   




const Settings = () => {
    const { userHasAuthenticated } = useAppContext();

    return ( 
        <div className="Settings">
            <h1>Manage your daily budget</h1>
            <p>Add your income and expenses</p>
            <SettingsForm />
        </div>
       
    )
}
export default Settings