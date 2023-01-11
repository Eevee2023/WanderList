import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
//import Homepage from './Homepage.jsx';
import { useNavigate } from "react-router-dom";



export default function Dropdown(props) {
  const [open, setOpen] = React.useState(false);

  /* old code sorry
  let pollData = props.pollData
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null)

  //button
  const pollClick = () => {
    navigate(`/display/${poll_id}`)
  }
  */
  // url for get all fetch api/poll/${poll_id}

  // button functionality
  const handleClick = () => {
    setOpen(!open);
  };

  let data=props.data
  console.log(data)

function dateHandler (string) {
  
   
    //get date slice first 10 chars
    //first 4 is year, slice that
    // then hyphen then day
    //then hypen then month
    //concat them in the right order

    string = string.slice(0,11)
    const year = string.slice(0,4)
    const month = string. slice(5,7)
    const day = string.slice(8,10)
    return `${month}/${day}/${year}`

  
}

//console.log(typeof data[11].startDate)
  return (
   
    <Box
    sx={{
      
    }}>
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     

      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Your Trips" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {data.map((el) => (
          <ListItemButton sx={{ pl: 4 }} key= {el._id}  >
              <ListItemIcon>
            < AirplaneTicketIcon  />
          </ListItemIcon>
              <ListItemText
               primary= {el.location} secondary= {`${el.startDate} - ${el.endDate}`} />
          </ListItemButton>
        ))}
      
        </List>
      </Collapse>

    </List>
    </Box>
    
  );
}


/*{
    "location": 
    "startDate": 
    "endDate": 
    "packing_list": 
    "itinerary": 
    "notes": 


}*/

