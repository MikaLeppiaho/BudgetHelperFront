import React, { useState } from 'react'

import { Form, Button, Col } from 'react-bootstrap'

const SettingsForm = ({ submitNewBudgetSetting, addNewExpense }) => {
  const [newIncome, setNewIncome] = useState('')
  const [newExpenseAmount, setNewExpenseAmount] = useState(0)
  const [newExpenseDescription, setNewExpenseDescription] = useState('')
  const [savings, setNewSavingsValue] = useState(0)

  const handleIncomeChange = (event) => {
    setNewIncome(event.target.value)
  }
  const handleNewExpenseDescription = (event) => {
    setNewExpenseDescription(event.target.value)
  }
  const handleNewExpenseAmount = (event) => {
    setNewExpenseAmount(event.target.value)
  }

  const handleRangeChange = (event) => {
    setNewSavingsValue(event.target.value)
  }

  return (
    <div>
      <Form>
        <Form.Row className="align-items-center">
          <Form.Group as={Col} controlId="formGridIncome">
            <Form.Label>Monthly Income</Form.Label>
            <Form.Control
              type="Number"
              value={newIncome}
              onChange={handleIncomeChange}
              placeholder="Enter monthly income"
            />
            <Form.Text className="text-muted">Enter monthly income</Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicRangeCustom">
            <Form.Label>Savings % {savings}</Form.Label>
            <Form.Control
              type="range"
              name="volName"
              value={savings}
              min="0"
              max="100"
              custom
              onChange={handleRangeChange}
            />
            <Form.Text className="text-muted">
              How much would you want to save from your income
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSubmit">
            <Button
              variant="primary"
              onClick={() => submitNewBudgetSetting(newIncome, savings)}
            >
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
        <Form.Row className="align-items-center">
          <Form.Label>Monthly expenses</Form.Label>
        </Form.Row>

        <Form.Row className="align-items-center">
          <Form.Group as={Col} controlId="formExpenseDescription">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              value={newExpenseDescription}
              onChange={handleNewExpenseDescription}
              placeholder="Enter expense description"
            />
            <Form.Text className="text-muted">
              Enter monthly expense description (Rent etc.)
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} controlId="formExpenseAmount">
            <Form.Label>amount</Form.Label>
            <Form.Control
              type="number"
              value={newExpenseAmount}
              onChange={handleNewExpenseAmount}
              placeholder="Enter expense amount"
            />
            <Form.Text className="text-muted">
              Enter monthly expenses amount (Rent etc.)
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} controlId="formExpenseSubmit">
            <Button
              variant="primary"
              onClick={() =>
                addNewExpense(newExpenseDescription, newExpenseAmount)
              }
            >
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  )
}

export default SettingsForm
