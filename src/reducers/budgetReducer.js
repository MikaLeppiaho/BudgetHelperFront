import dailyBudgetService from '../services/dailybudget'

const budgetReducer = (state = '', action) => {
  switch (action.type) {
    case 'INIT_DAILY':
      return (state = action.data)
    case 'UPDATE_DAILY':
      return (state = action.dailyBudget)
    default:
      return state
  }
}

export const initializeDailyBudget = () => {
  return async (dispatch) => {
    const result = await dailyBudgetService.getDailyBudget()
    dispatch({
      type: 'INIT_DAILY',
      data: { dailyBudget: result.dailyBudget }
    })
  }
}
export const updateDailyBudgetAction = (expenseData, id) => {
  return async (dispatch) => {
    await dailyBudgetService.updateDailyBudget(expenseData, id)
    const dailyBudget = await dailyBudgetService.getDailyBudget()

    dispatch({
      type: 'UPDATE_DAILY',
      dailyBudget
    })
  }
}

export default budgetReducer
