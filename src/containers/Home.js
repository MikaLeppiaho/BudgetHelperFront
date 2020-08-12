import React from 'react'
import './Home.css'
import { useAppContext } from '../libs/contextLib'
import DailyBudget from '../forms/BudgetForm'

const HomePage = () => (
  <div className="Home">
    <div className="lander">
      <h1>Budget helper</h1>
      <p>
        A simple Single Page app built with React to help you handle your daily
        budget
      </p>
    </div>
  </div>
)

const BudgetPage = () => (
  <div className="Home">
    <div className="lander">
      <h1>Budget helper</h1>

      <DailyBudget />
    </div>
  </div>
)

const Home = () => {
  const { isAuthenticated } = useAppContext()

  return <div>{isAuthenticated ? <BudgetPage /> : HomePage()}</div>
}
export default Home
