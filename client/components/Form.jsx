import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button'




export default function Form (children) {
  
    const [place, setPlace] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [packing, setPacking] = useState('');
    const [itin, setItin] = useState('');
    const [note, setNote] = useState('');


    const [travelObj, setTravelObj] = useState({
      location: '',

    });
  
    const handleClick = () => {
      console.log(packing)
      //split packing_list and itinerary into arrays
      const packing_listArr = packing.split(',');
      const itineraryArr = itin.split(',');
      //build object
      const travelObj = {
        location: place,
        startDate: start,
        endDate: end,
        packing_list: packing_listArr,
        itinerary: itineraryArr,
        notes: note
      }
      //send trip to db
      saveTrips(travelObj);

      console.log(travelObj)




      // const location = document.getElementById('loc');
      // const startDate = document.getElementById('sd');
      // const endDate = document.getElementById('ed');
      // let packing_list = document.getElementById('pl');
      // let itinerary = document.getElementById('itin');
      // const notes = document.getElementById('notes');
      
      // if (packing_list.length > 0) packing_list = packing_list.split(',');
      // if (itinerary.length > 0) itinerary = itinerary.split(',');  
      

      // if (!location || !startDate || !endDate) return;
      // const data = { 
      //   location,
      //   startDate,
      //   endDate,
      //   packing_list,
      //   itenerary,
      //   notes
      // }
      // return saveTrips(data);
    };

    async function saveTrips(data) {
      const response = await fetch('http://localhost:8080/api/createTrip', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      });
      return response.json();
    }

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
          id="loc" 
          label="Location" 
          variant="standard"
          onChange={(event) => {setPlace(event.target.value) }} />


    <TextField id="sd" 
          className="standard-basic"
          label="Start Date" 
          variant="standard" 
          onChange={(event) => {setStart(event.target.value) }} />

    <TextField id="ed"
          className="standard-basic" 
          label="End Date" 
          variant="standard" 
          onChange={(event) => {setEnd(event.target.value) }} />

    <TextField
          id="pl"
          className="outlined-multiline-static"
          label="Packing List"
          multiline
          rows={4}
          onChange={(event) => {setPacking(event.target.value) }}
          // defaultValue="Pants" 
        />
          <TextField
          id="itin"
          className="outlined-multiline-static"
          label="Itinerary"
          multiline
          rows={4}
          onChange={(event) => {setItin(event.target.value) }} 
          // defaultValue="Croissants & Coffee"
        />
        <TextField
          id="notes"
          className="outlined-multiline-static"
          label="Notes"
          multiline
          rows={4}
          onChange={(event) => {setNote(event.target.value) }} 
          // defaultValue="Eiffel Tower lights up on the hour"
        />

      

    <Button variant="contained" onClick={() => handleClick()}>Save</Button>

    </Box>
    
    
    
    </>
  
  
)

}

//onChange={(event) => {setLocation(event.target.value)}} />
//str.split(‘, ')