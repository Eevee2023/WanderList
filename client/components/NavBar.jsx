
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
//import AcUnitIcon from '@mui/icons-material/AcUnit';
import Dropdown from './Dropdown.jsx'




export default function NavBar(props) {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
      sx={{backgroundColor:'#E84855'}}
       position='static'>
        <Toolbar>
      
            <AirplaneTicketIcon
            sx={{ color: 'white', fontSize: '40px' }}
            href="/">
                
            </AirplaneTicketIcon>
        
          <Button 
          className='navPoller' 
          variant='text'
          sx={{color:'white', fontSize: '20px', margin: '12px'}}
          href="/homepage">
          WanderList
          </Button>
          <Button 
          href="/Login"
          variant='text'
          sx={{color:'white'}}
          >Login
          </Button>
          <Button 
          href="/Signup" 
          variant='text'
          sx={{color:'white'}}
          >SignUp
          </Button>
          <Button
          href="/" 
          sx={{color:'white'}}
          >Your Trips
          </Button>
          <Button 
          sx={{color:'white'}}
          href="/1" 
          >Add Trip
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

/*
 <div className='navbar'>
        <NavBar />
      </div>
      */
