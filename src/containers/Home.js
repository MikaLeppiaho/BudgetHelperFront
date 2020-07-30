import React, { useEffect, useState } from 'react'
import './Home.css'
import { useAppContext } from '../libs/contextLib'
import dailyBudgetService from '../services/dailybudget'

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

const BudgetPage = ({ settings }) => (
  <div className="Home">
    <div className="lander">
      <h1>Budget helper</h1>
      {settings ? (
        <div>
          <p>This is your daily budget! </p>
          <p>{settings.dailyBudget}</p>
          <form>{/* Päivittäisen budgetin päivittymisformi*/}</form>
        </div>
      ) : (
        <p>You haven't set your budgetsettings. Check the Settings tab!</p>
      )}
    </div>
  </div>
)

const Home = () => {
  const [settings, setSettings] = useState('')
  const { isAuthenticated } = useAppContext()
  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await dailyBudgetService.getDailyBudget()
      setSettings(settings)
    }
    if (isAuthenticated) {
      fetchSettings()
    }
  }, [isAuthenticated])

  return (
    <div>
      {isAuthenticated ? <BudgetPage settings={settings} /> : HomePage()}
    </div>
  )
}
export default Home
