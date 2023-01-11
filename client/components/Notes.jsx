import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function Notes(props) {

  const notes = [];
  for(let i = 0; i < props.data.length; i++) {
    if(i === props.data.length - 1) {
      notes.push(
        <>
        <ListItem>
        <ListItemText primary={props.data[i]} />
        </ListItem>
      </>
        );
    } else {
      notes.push(
        <>
        <ListItem>
        <ListItemText primary={props.data[i]} />
        </ListItem>
        <Divider />
        </>
      );
    }
  }
  
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {notes}
    </List>
  );
}