import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import settingsReducer from './reducers/settingsReducer'
import authenticationReducer from './reducers/authenticationReducer'
import dailyBudgetReducer from './reducers/budgetReducer'
import reduxThunk from 'redux-thunk'

const reducer = combineReducers({
  notification: notificationReducer,
  budgetSetting: settingsReducer,
  dailyBudget: dailyBudgetReducer,
  authentication: authenticationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

export default store
