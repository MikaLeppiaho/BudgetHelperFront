import React from 'react'
import { Form, Button } from 'react-bootstrap'
import useFormSignup from '../components/useSignupForm'
import validateSignup from '../components/validatesignup'
import userService from '../services/user'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const SignupForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const submit = async () => {
    const userObject = {
      username: values.username.trim(),
      email: values.email.trim(),
      password: values.password
    }
    dispatch(setNotification('User created succesfully', 10))
    await userService.newUser(userObject)
    history.push('/login')
  }
  const { handleChange, handleSubmit, values, errors } = useFormSignup(
    submit,
    validateSignup
  )

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            {errors.username && <p>{errors.username}</p>}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="email@address.com"
          />
          <Form.Text className="text-muted">
            {errors.email && <p>{errors.email}</p>}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="password"
          />
          <Form.Text className="text-muted">
            {errors.password && <p>{errors.password}</p>}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>confirm password</Form.Label>
          <Form.Control
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="confirm password"
          />
          <Form.Text className="text-muted">
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  )
}

export default SignupForm
