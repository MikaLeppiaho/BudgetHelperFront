import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/RemoveCircle';

const SettingsForm = ({ }) => {
    return (
        <Grid >
                <p>Income for month: </p>
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