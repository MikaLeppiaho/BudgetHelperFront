import React, {useState, useEffect } from 'react';
import loginService from './services/login'
import dailybudgetService from './services/dailybudget'
import './App.css';
import LoginForm from './forms/loginform';
import DailyBudgetForm from './forms/dailybudgetform'



const App = () =>  {

  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [dailyBudget, setDailyBudget] = useState('')
  const [newPurchase, setNewPurchase] = useState('')

  

  useEffect(() => {
    console.log('logging in')
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    console.log('loggedUserJSON', window.localStorage.getItem('loggedUser'))
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      console.log('misterUser', user)
      dailybudgetService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    if(user){
      dailybudgetService.setToken(user.token)
      dailybudgetService
      .getDailyBudget()
      .then(response => {
        setDailyBudget(response)
      })
    }
  },[user])


  
    
 

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({username, password})

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

      console.log('handleLogin', window.localStorage.getItem('loggedUser'))

      setUser(user)
      setUsername('')
      setPassword('')
      
    } catch (exception) {
    console.log('Wrong credentials')
    }
    
  }

  const handleLogout = (event) => {
    event.preventDefault()
    try {
      window.localStorage.removeItem('loggedUser')
      setUser(null)
    } catch (exception) {
      console.log('Error clearing localstorage')
    }
  }

  const handlePurchaseInputChange = (event) => setNewPurchase(event.target.value)

  const addNewPurchase = (event) => {
    event.preventDefault()

    const purchaseObject = {
      amount: newPurchase
    }

    dailybudgetService
      .updateDailyBudget(dailyBudget.id, purchaseObject)
      .then(response => {
        dailybudgetService
          .getDailyBudget()
          .then(response => {
            setDailyBudget(response)
            setNewPurchase('')
          })
        })
  }

  const loginForm = () =>  (
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
    )
  




  const displayDailyBudget = () => (
    <DailyBudgetForm 
    dailyBudget={dailyBudget}
    addNewPurchase={addNewPurchase}
    newPurchase={newPurchase}
    handlePurchaseInputChange={handlePurchaseInputChange}
    handleLogout={handleLogout}
    user={user}
    />
  )

  return (
    <div>
      <h1>Budget Helper</h1>

      {user === null 
      ? loginForm() 
      : displayDailyBudget()}
     

    </div>
  )
}

export default App;
