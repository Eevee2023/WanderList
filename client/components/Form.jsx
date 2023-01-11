import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button'




export default function Form (children) {
  
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const handleClick = () => {
      console.log('click handled');
    };

  





return(
    <>
    <br></br>
    <br></br>
    <Box    component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
    <TextField 
          id="standard-basic" 
          label="Location" 
          variant="standard"
          onChange={(event) => {setLocation(event.target.value) }} />


    <TextField id="standard-basic" 
    label="Start Date" 
    variant="standard" 
    onChange={(event) => {setStartDate(event.target.value) }} />

    <TextField id="standard-basic" 
    label="End Date" 
    variant="standard" 
    onChange={(event) => {setEndDate(event.target.value) }} />
  
    <TextField id="standard-basic" label="notes" variant="standard" />


    <TextField
          id="outlined-multiline-static"
          label="Packing List"
          multiline
          rows={4}
          defaultValue="Pants"
        />
          <TextField
          id="outlined-multiline-static"
          label="Itinerary"
          multiline
          rows={4}
          defaultValue="Croissants & Coffee"
        />
        <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={4}
          defaultValue="Eiffel Tower lights up on the hour"
        />

      

<Button
        type='submit'
        >
          

        </Button>
    </Box>
    
    
    
    </>
  
  
)

}

//onChange={(event) => {setLocation(event.target.value)}} />
//str.split(‘, ')