const validateSignup = (values) => {
  let errors = {}
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.username) {
    errors.username = 'username is required'
  } else if (values.username.length < 3) {
    errors.username = 'username needs to be three or more characters long'
  }

  if (!values.email) {
    errors.email = 'email is required'
  } else if (!emailReg.test(values.email)) {
    errors.email = 'email is invalid'
  }

  if (!values.password) {
    errors.password = 'password is required'
  } else if (values.password.length < 6) {
    errors.password = 'password needs to be six or more characters long'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password confirmation is required'
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match'
  }
  return errors
}

export default validateSignup
