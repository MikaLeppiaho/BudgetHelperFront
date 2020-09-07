import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import SettingsForm from '../forms/SettingsForm'

import Expenses from '../components/Expenses'
import Income from '../components/Income'

import serviceIncome from '../services/setting'
import serviceExpense from '../services/expense'

import { initializeSettings, addExpenses } from '../reducers/settingsReducer'

const Settings = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeSettings())
  }, [dispatch])

  const settings = useSelector((state) => state.budgetSetting)

  const removeExpense = async (expenseId) => {
    try {
      await serviceExpense.removeExpense(expenseId)
    } catch (e) {}
  }

  const submitNewBudgetSetting = async (income, savings) => {
    const budgetSetting = {
      income: income,
      savings: savings / 100 //muutetaan säästettävästä prosenttimäärästä desimaali
    }
    await serviceIncome.postBudgetSetting(budgetSetting)
  }

  //Funtio ottaa argumentiksi SettingsFormilta kuukausittaisen menon hinnan ja selityksen, ja lähettää ne post pyynnöllä tietokantaan
  const addNewExpense = async (expenseDescription, expenseAmount) => {
    const newExpense = {
      description: expenseDescription,
      amount: expenseAmount / 1
    }
    dispatch(addExpenses(newExpense))
    //setExpenses(expenses.concat(result))
    //console.log('Updated', expenses)
  }

  return (
    <div className="Settings">
      <h1>Manage your daily budget</h1>
      <p>Add your income and expenses</p>
      <SettingsForm
        submitNewBudgetSetting={submitNewBudgetSetting}
        addNewExpense={addNewExpense}
      />
      <div>
        <Income income={settings.income} savings={settings.savings} />
        <Expenses />
      </div>
      )
    </div>
  )
}
export default Settings
