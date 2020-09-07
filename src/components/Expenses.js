import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { removeExpenses } from '../reducers/settingsReducer'
import { useSelector, useDispatch } from 'react-redux'

import './Expenses.css'

const Setting = () => {
  const settings = useSelector((state) => state.budgetSetting.expenses)
  const dispatch = useDispatch()

  const buttonRemoveExpense = (id) => {
    dispatch(removeExpenses(id))
  }

  return (
    <div>
      <h3>Expenses</h3>

      <ListGroup>
        {settings.map((s) => (
          <ListGroup.Item key={s.id}>
            <Container>
              <Row>
                <Col>{s.description}</Col>
                <Col xs={10}>{s.amount} €</Col>
                <Button onClick={() => buttonRemoveExpense(s.id)}>X</Button>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Setting
