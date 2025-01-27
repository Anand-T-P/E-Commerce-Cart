import {React, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import Login from '../Components/Login';
import Register from '../Components/Register';

export default function Home() {
    
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    function onCallBack(boolValue){
      boolValue && boolValue ===1 ? setValue(boolValue): setValue(0);
    }


  return (
    <div className="App">
              <Card variant='outlined'sx={{width: '50%', minHeight:'50%',  marginTop:'2%',marginLeft: '25%',marginRight:'10%'}}>
                <CardContent>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      centered
                    >
                      <Tab label="Sign Up" />
                      <Tab label="Sign In" />
                    </Tabs>
                    {value===1? <Login/> : <Register value={value} onCallBack={onCallBack}/>}
                  </Box>
                </CardContent>
              </Card>
            </div>
  )
}
