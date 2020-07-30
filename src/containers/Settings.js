import React, { useState } from 'react'
import './Home.css'
import SettingsForm from '../forms/SettingsForm'
import serviceIncome from '../services/income'
import serviceExpense from '../services/expense'

const Settings = () => {
  const submitNewBudgetSetting = async (income, savings) => {
    const budgetSetting = {
      income: income,
      savings: savings / 100 //muutetaan säästettävästä prosenttimäärästä palvelimelle ymmärrettäväksi desimaaliksi
    }
    await serviceIncome.postBudgetSetting(budgetSetting)
  }

  //Funtio ottaa argumentiksi SettingsFormilta kuukausittaisen menon hinnan ja selityksen, ja lähettää ne post pyynnöllä tietokantaan
  const addNewExpense = (expenseDescription, expenseAmount) => {
    console.log('New expense amount     : ', expenseAmount)
    console.log('New expense description: ', expenseDescription)

    const newExpense = {
      description: expenseDescription,
      amount: expenseAmount / 1
    }
    const result = serviceExpense.addNewExpense(newExpense)
    console.log('result: ', result)
  }

  return (
    <div className="Settings">
      <h1>Manage your daily budget</h1>
      <p>Add your income and expenses</p>
      <SettingsForm
        submitNewBudgetSetting={submitNewBudgetSetting}
        addNewExpense={addNewExpense}
      />
    </div>
  )
}
export default Settings
