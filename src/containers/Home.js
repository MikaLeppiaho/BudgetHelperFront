import React, { useEffect, useState } from 'react'
import './Home.css'
import { useAppContext } from '../libs/contextLib'
import incomeService from '../services/income'

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
      <p>This is your daily budget! </p>
      <p>{settings.dailyBudget}</p>
    </div>
  </div>
)

const Home = () => {
  const [settings, setSettings] = useState('')
  const { isAuthenticated } = useAppContext()
  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await incomeService.getBudgetSetting()
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
