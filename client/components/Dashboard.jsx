import { useEffect, useState } from 'react';
import TripCard from './TripCard.jsx';
import NavBar from './NavBar.jsx';
import Form from './Form.jsx'

const Dashboard = (props) => {
  const [index, setIndex] = useState(0);

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  }

  //set all of the prop data to create links in the nav bar
  //create an array of all of the trips
  const trips = [];
  for(key in props.data.trips) {
    trips.push(<TripCard tripInfo={props.data.trips[key]}/>)
  }

  return(
    <div>
      <NavBar>
      </NavBar>
      <Form></Form>
    </div>
  )
}

//  <NavBar trips={trips} handleIndexChange={handleIndexChange}/>
//{trips[index]}


export default Dashboard;