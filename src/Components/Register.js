import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import "../Styles/login.css"

export default function Register({value,onCallBack}) {
    console.log("Props: ",value);
    
      function handleSignUp(){
        // navigate('/login')
        onCallBack(1)
        console.log("Clicked");
        
      }
  return (
    <Box sx={{
        width: '100%',
        margin: '1%'
      }}>
        <div className='login-input-cls'>
          <TextField id="standard-basic" label="Name" variant="filled" size='small' sx={{margin: '2%'}} />
          <TextField id="standard-basic" label="Email" type='email' variant="filled" size='small' sx={{margin: '2%'}} />
          <TextField id="standard-basic" label="Password" type='password' variant="filled" size='small' sx={{margin: '2%'}} />
          <TextField id="standard-basic" label="Confirm Password" type='password' variant="filled" size='small' sx={{margin: '2%'}} />
        </div>
        <div className='button-cls'>
          <Button variant="contained" sx={{backgroundColor: 'orange'}} endIcon={<ArrowForwardOutlinedIcon />} onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </Box>
  )
}
