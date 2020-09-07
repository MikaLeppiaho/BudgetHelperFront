import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Income = ({ income, savings }) => {
  return (
    <div>
      <h3>Income</h3>
      <Container>
        <Row>
          <Col>Monthly income</Col>
          <Col>Savings goal</Col>
        </Row>
        <Row>
          <Col>{income} €</Col>
          <Col>{savings * 100} %</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Income
