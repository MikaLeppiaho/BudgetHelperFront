import React, { useState, useEffect } from 'react'
import { Form, Button, DropdownButton, Dropdown, Col } from 'react-bootstrap'
import './BudgetForm.css'

import { useDispatch, useSelector } from 'react-redux'
import {
  initializeDailyBudget,
  updateDailyBudgetAction,
  updateCategory
} from '../reducers/budgetReducer'

import dailyBudgetService from '../services/dailybudget'

const BudgetForm = () => {
  const [expenseAmount, setExpenseAmount] = useState('')
  const [category, setCategoryValue] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeDailyBudget())
  }, [dispatch])

  const dailyBudget = useSelector((state) => state.dailyBudget)
  const settings = useSelector((state) => state.budgetSetting)
  console.log('Form Daily: ', dailyBudget)

  const updateDailyBudget = async (expenseAmount, category) => {
    const expenseData = {
      category: category,
      dailyBudget: Number(expenseAmount)
    }
    dispatch(updateDailyBudgetAction(expenseData, settings.id))
  }

  return (
    <div>
      {settings.income === 0 ? (
        <p>You haven't set your budgetsettings. Check the Settings tab!</p>
      ) : (
        <div>
          <div className="messageStyle">
            <Form>
              <Form.Row className="align-items-start">
                <Col>
                  <Form.Group as={Col} controlId="formDailyBudgetAmount">
                    <Form.Label>
                      Your budget for today:{' '}
                      <strong>{dailyBudget.dailyBudget}</strong>
                    </Form.Label>
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form>
          </div>
          <div className="expenseStyle">
            <Form>
              <Form.Row className="align-items-left">
                <Form.Group as={Col} controlId="formDailyBudgetInput">
                  <Form.Label>Add a new expense</Form.Label>
                  <Form.Control
                    className="formControl"
                    type="Number"
                    value={expenseAmount}
                    onChange={(event) => setExpenseAmount(event.target.value)}
                    placeholder="€"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formDailyBudgetCategory">
                  <Form.Label>Categorize your expense</Form.Label>
                  <DropdownButton
                    id="dropdown-item-button"
                    title={category === '' ? 'Category' : category}
                    onSelect={(event) => setCategoryValue(event)}
                  >
                    <Dropdown.Item eventKey="Lunch">Lunch</Dropdown.Item>
                    <Dropdown.Item eventKey="Groceries">
                      Groceries
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Transportation">
                      Transportation
                    </Dropdown.Item>
                  </DropdownButton>
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Text className="text-muted">
                  Did you buy anything? Add the amount here
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formDailyBudgetSubtract">
                <Button
                  variant="primary"
                  onClick={() => updateDailyBudget(expenseAmount, category)}
                >
                  Subtract
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      )}
    </div>
  )
}

export default BudgetForm
