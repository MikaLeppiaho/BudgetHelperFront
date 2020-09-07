//Reducer for redux. Save the expense state into the store.
import incomeServices from '../services/setting'
import expenseServices from '../services/expense'

const settingsReducer = (state = '', action) => {
  switch (action.type) {
    case 'INIT_EXPENSES':
      return (state = action.budgetSetting)
    case 'ADD_EXPENSES':
      return (state = action.newBudgetSetting)
    case 'REMOVE_EXPENSES':
      return (state = action.budgetSetting)
    default:
      return state
  }
}

export const initializeSettings = () => {
  return async (dispatch) => {
    const budgetSetting = await incomeServices.getBudgetSetting()
    dispatch({
      type: 'INIT_EXPENSES',
      budgetSetting
    })
  }
}

export const addExpenses = (newExpense) => {
  return async (dispatch) => {
    const budgetSetting = await incomeServices.getBudgetSetting()
    const newExpenses = await expenseServices.addNewExpense(newExpense)
    //const newExpenses = newExpense
    const newBudgetSetting = {
      ...budgetSetting,
      expenses: budgetSetting.expenses.concat(newExpenses)
    }
    console.log('newExpenses:', newExpenses)
    console.log('newBudgetSetting:', newBudgetSetting)
    dispatch({
      type: 'ADD_EXPENSES',
      newBudgetSetting
    })
  }
}

export const removeExpenses = (id) => {
  return async (dispatch) => {
    await expenseServices.removeExpense(id)
    const budgetSetting = await incomeServices.getBudgetSetting()
    console.log('budgetSetting', budgetSetting)
    dispatch({
      type: 'REMOVE_EXPENSES',
      budgetSetting
    })
  }
}

export default settingsReducer
