import React from 'react'
import {Button,
        Grid,
        makeStyles
    } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
     padding: 50,
     paddingLeft: 10,
     shadows: 10
    },
    control: {
      padding: 5,
    },
  }));

const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
        <form onSubmit = {handleSubmit}>

        <Grid >
            <Grid item xs={12}>
                <div className={classes.control}>
                username
                    <div>
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        onChange={handleUsernameChange}/>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.control}>
                    password
                    <div>
                        <input
                            type="password"
                            value={password}
                            name="Password"
                            onChange={handlePasswordChange}/>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12}>
                <p className={classes.control}>
                    <Button variant="contained"  type="submit">login</Button>
                </p>
            </Grid>
        </Grid>  

        </form>

        </Grid>


        )

}

export default LoginForm