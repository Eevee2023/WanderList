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



  return (
   

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
       
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
            < AirplaneTicketIcon  />
          </ListItemIcon>
              <ListItemText primary= 'Paris, France' secondary= '1/23/23' />
          </ListItemButton>
      
        </List>
      </Collapse>

    </List>
    
  );
}
