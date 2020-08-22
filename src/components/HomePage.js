import React from 'react'
import { Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import homeIcon1 from '../images/homeIcon1.png'
import homeIcon2 from '../images/homeIcon2.png'
import homeIcon3 from '../images/homeIcon3.png'

const HomePage = () => {
  const history = useHistory()

  const signUp = () => {
    history.push('/signup')
  }

  return (
    <div>
      <Row>
        <Col>
          <div className="backdrop">
            <h1>
              A simple tool to help you manage your daily expenses{' '}
              <p>
                <Button onClick={signUp}>Sign up</Button>
              </p>
            </h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>
            <img src={homeIcon1} />
          </h2>
          <p>Don't spend more than you make</p>
        </Col>
        <Col>
          <h2>
            <img src={homeIcon2} />
          </h2>
          <p>Always plan for the future</p>
        </Col>
        <Col>
          <h2>
            <img src={homeIcon3} />
          </h2>
          <p>Help your money grow</p>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
