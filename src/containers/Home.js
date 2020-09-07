import React from 'react'
import './Home.css'

import { useSelector } from 'react-redux'

import HomePage from '../components/HomePage'
import DailyBudget from '../forms/BudgetForm'

const Home = () => {
  const isAuthenticated = useSelector((state) => state.authentication.loggedIn)

  return (
    <div className="Home">
      <div className="lander">
        {isAuthenticated ? <DailyBudget /> : <HomePage />}
      </div>
    </div>
  )
}
export default Home
