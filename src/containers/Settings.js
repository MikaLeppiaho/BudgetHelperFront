import React, { useState } from 'react'
import './Home.css'
import SettingsForm from '../forms/SettingsForm'
import serviceIncome from '../services/income'

const Settings = () => {
  const submitNewBudgetSetting = async (income, savings) => {
    const budgetSetting = {
      income: income,
      savings: savings / 100 //muutetaan säästettävästä prosenttimäärästä palvelimelle ymmärrettäväksi desimaaliksi
    }
    await serviceIncome.postBudgetSetting(budgetSetting)
  }

  return (
    <div className="Settings">
      <h1>Manage your daily budget</h1>
      <p>Add your income and expenses</p>
      <SettingsForm submitNewBudgetSetting={submitNewBudgetSetting} />
    </div>
  )
}
export default Settings
