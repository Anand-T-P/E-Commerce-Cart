import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import "../Styles/login.css"
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function handleSignIn(){
    navigate('/products')
  }

  return (
    <Box sx={{
      width: '100%',
      margin: '1%'
    }}>
      <div className='login-input-cls'>
        <TextField id="standard-basic" label="Username" variant="filled" size='small' sx={{margin: '2%'}} />
        <TextField id="standard-basic" label="Password" type='password' variant="filled" size='small' sx={{margin: '2%'}} />
      </div>
      <div className='button-cls'>
        <Button variant="contained" sx={{backgroundColor: 'orange'}} endIcon={<ArrowForwardOutlinedIcon />} onClick={handleSignIn}>
          Sign In
        </Button>
      </div>
    </Box>
  )
}
