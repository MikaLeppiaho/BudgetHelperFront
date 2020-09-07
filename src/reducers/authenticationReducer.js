import loginService from '../services/login'
import expenseService from '../services/expense'
import incomeService from '../services/setting'
import dailyBudgetService from '../services/dailybudget'

const authenticationReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      incomeService.setToken(action.user.token)
      expenseService.setToken(action.user.token)
      dailyBudgetService.setToken(action.user.token)
      return {
        loggedIn: true,
        user: action.user
      }
    case 'LOGOUT_SUCCESS':
      return {
        loggedIn: false,
        user: action.user
      }
    default:
      return state
  }
}
/*return async (dispatch) => {
  console.log('starting budget setting action')
  const budgetSetting = await incomeServices.getBudgetSetting()
  console.log('Budget Settings: ', budgetSetting)
  dispatch({
    type: 'INIT_EXPENSES',
    budgetSetting: budgetSetting
  })
}*/
export const login = (username, password) => {
  return async (dispatch) => {
    const login = await loginService.login({ username, password })
    window.localStorage.setItem('BudgetUser', JSON.stringify(login))
    dispatch({
      type: 'LOGIN_SUCCESS',
      user: login
    })
  }
}

export const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('BudgetUser')
    dispatch({
      type: 'LOGOUT_SUCCESS',
      user: ''
    })
  }
}

export const setAuthenticated = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      user: user
    })
  }
}

export default authenticationReducer
