import React, { useState, useEffect } from 'react'
import './Home.css'
import SettingsForm from '../forms/SettingsForm'

import Expenses from '../components/Expenses'
import Income from '../components/Income'

import serviceIncome from '../services/income'
import serviceExpense from '../services/expense'

const Settings = () => {
  const [settings, setBudgetSettings] = useState('')
  const [expenses, setExpenses] = useState([])
  const [buttonState, setButtonState] = useState(false)

  useEffect(() => {
    let isSubscribed = true
    const fetchSettings = async () => {
      const settings = await serviceIncome.getBudgetSetting()
      setBudgetSettings(settings)
      setExpenses(settings.expenses)
      console.log('expenses with effect: ', expenses)
    }
    if (isSubscribed) {
      fetchSettings()
    }
    return () => (isSubscribed = false)
  }, [buttonState])

  const removeExpense = async (expenseId) => {
    try {
      setButtonState(true)
      await serviceExpense.removeExpense(expenseId)
      setButtonState(false)
    } catch (e) {}
  }

  const submitNewBudgetSetting = async (income, savings) => {
    const budgetSetting = {
      income: income,
      savings: savings / 100 //muutetaan säästettävästä prosenttimäärästä palvelimelle ymmärrettäväksi desimaaliksi
    }
    await serviceIncome.postBudgetSetting(budgetSetting)
  }

  //Funtio ottaa argumentiksi SettingsFormilta kuukausittaisen menon hinnan ja selityksen, ja lähettää ne post pyynnöllä tietokantaan
  const addNewExpense = async (expenseDescription, expenseAmount) => {
    const newExpense = {
      description: expenseDescription,
      amount: expenseAmount / 1
    }
    const result = await serviceExpense.addNewExpense(newExpense)
    setExpenses(expenses.concat(result))
    console.log('Updated', expenses)
  }

  return (
    <div className="Settings">
      <h1>Manage your daily budget</h1>
      <p>Add your income and expenses</p>
      <SettingsForm
        submitNewBudgetSetting={submitNewBudgetSetting}
        addNewExpense={addNewExpense}
      />
      {!settings ? (
        <>loading...</>
      ) : (
        <div>
          <Income income={settings.income} savings={settings.savings} />
          <Expenses settings={expenses} removeExpense={removeExpense} />
        </div>
      )}
    </div>
  )
}
export default Settings
