
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AcUnitIcon from '@mui/icons-material/AcUnit';




export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
      
            <AcUnitIcon 
            sx={{ color: 'white', fontSize: '40px' }}
            href="/">
                
            </AcUnitIcon>
        
          <Button 
          className='navPoller' 
          variant='outlined'
          sx={{color:'white', borderColor: 'gray', fontSize: '20px', margin: '12px'}}
          href="/homepage">
          Poller
          </Button>
          <Button 
          href="/Login"
          variant='outlined'
          sx={{color:'white'}}
          >Login
          </Button>
          <Button 
          href="/Signup" 
          variant='outlined'
          sx={{color:'white'}}
          >SignUp
          </Button>
          <Button
          href="/" 
          sx={{color:'white', borderColor: 'gray'}}
          >Add a Poll
          </Button>
          <Button 
          sx={{color:'white', borderColor: 'gray'}}
          href="/1" 
          >Take a Poll!
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
