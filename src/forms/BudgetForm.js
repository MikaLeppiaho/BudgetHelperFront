import React, { useState, useEffect } from 'react'
import { useAppContext } from '../libs/contextLib'
import { Form, Button } from 'react-bootstrap'

import dailyBudgetService from '../services/dailybudget'

const BudgetForm = () => {
  const [settings, setSettings] = useState('')
  const [dailyBudget, setDailyBudget] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  const { isAuthenticated } = useAppContext()

  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await dailyBudgetService.getDailyBudget()
      setSettings(settings)
      setDailyBudget(settings.dailyBudget)
    }
    if (isAuthenticated) {
      fetchSettings()
    }
  }, [isAuthenticated])

  const updateDailyBudget = async (expenseAmount) => {
    const expenseData = {
      dailyBudget: Number(expenseAmount)
    }
    const request = await dailyBudgetService.updateDailyBudget(
      expenseData,
      settings.id
    )
    setDailyBudget((dailyBudget - request.dailyBudget).toFixed(2))
  }

  return (
    <div>
      {settings ? (
        <Form>
          <Form.Group controlId="formDailyBudgetAmount">
            <Form.Label> Your budget for today: </Form.Label>
            <Form.Control plaintext readOnly value={dailyBudget} />
          </Form.Group>
          <Form.Group controlId="formDailyBudgetInput">
            <Form.Label>Add a new expense</Form.Label>
            <Form.Control
              type="Number"
              value={expenseAmount}
              onChange={(event) => setExpenseAmount(event.target.value)}
              placeholder="€"
            />
            <Form.Text className="text-muted">
              Did you buy anything? Add the amount here
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formDailyBudgetSubtract">
            <Button
              variant="primary"
              onClick={() => updateDailyBudget(expenseAmount)}
            >
              Subtract
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <p>You haven't set your budgetsettings. Check the Settings tab!</p>
      )}
    </div>
  )
}

export default BudgetForm
