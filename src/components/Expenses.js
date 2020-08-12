import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

import './Expenses.css'

const Setting = ({ settings, removeExpense }) => {
  return (
    <div>
      <h3>Expenses</h3>
      <ListGroup>
        {settings.expenses.map((s) => (
          <ListGroup.Item key={s.id}>
            <Container>
              <Row>
                <Col>{s.description}</Col>
                <Col xs={10}>{s.amount} €</Col>
                <Button onClick={() => removeExpense(s.id)}>X</Button>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Setting
