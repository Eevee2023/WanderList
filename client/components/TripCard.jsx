import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PackingList from './PackingList.jsx'
import Itinerary from './Itinerary.jsx'
import Notes from './Notes.jsx'


/*
trip1: {
      location: 'Chicago',
      startDate: '1/1/23',
      endDate: '1/10/23',
      packingList: ['Shirts', 'Hats', 'Pants', 'Phone', 'Wallet', 'Laptop'],
      itinerary: ['Go to beach', 'Go to movies', 'Go hiking', 'Rent a car', 'Eat dinner'],
      notes: ['Fake note 1', 'Fake note 2', 'Fake note 3', 'Fake note 4']
    }
*/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TripCard(props) {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <Box sx={{ width: '100%', border: 1 }}>
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '25px'}}>
        <Typography variant="h6" >{props.data.location}</Typography>
        <Typography variant="h6" >Start Date: {props.data.startDate}</Typography>
        <Typography variant="h6" >End Date: {props.data.endDate}</Typography>
      </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Packing List" {...a11yProps(0)} />
            <Tab label="Itinerary" {...a11yProps(1)} />
            <Tab label="Notes" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <PackingList data={props.data.packingList} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Itinerary data={props.data.itinerary} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Notes data={props.data.notes} />
        </TabPanel>
      </Box>
    </Box>
    );
}

export default TripCard;