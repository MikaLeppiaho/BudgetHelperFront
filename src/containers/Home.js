import React from 'react'
import './Home.css'
import { useAppContext } from '../libs/contextLib'

import HomePage from '../components/HomePage'
import DailyBudget from '../forms/BudgetForm'

const Home = () => {
  const { isAuthenticated } = useAppContext()
  console.log('isAuth', isAuthenticated)

  return (
    <div className="Home">
      <div className="lander">
        {isAuthenticated ? <DailyBudget /> : <HomePage />}
      </div>
    </div>
  )
}
export default Home
