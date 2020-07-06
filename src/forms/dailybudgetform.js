import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/RemoveCircle';

const DailyBudgetForm = ({ 
    dailyBudget,
    addNewPurchase,
    newPurchase,
    handlePurchaseInputChange,
    handleLogout,
    user
}) => {
    return (
        <Grid >
            <h1> Daily budget  </h1>
                <p>Money left for today: {Math.round(dailyBudget.dailyBudget*100)/100} €</p>
                <form onSubmit = {addNewPurchase}>
                <div>New purchase</div>
                <input 
                    value={newPurchase} 
                    onChange={handlePurchaseInputChange}
                />
                    <Button type = "submit"><RemoveIcon color="secondary" /></Button> 
                </form>
                <p style={{top:0, right:0, position:"fixed"}}>
                {user.name}
                <button onClick={handleLogout}>Logout</button>
                </p>
               
        </Grid>
        
                

        
    )
    
}

export default DailyBudgetForm