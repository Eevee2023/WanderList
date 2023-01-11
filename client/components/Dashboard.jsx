import { useEffect, useState } from 'react';
import TripCard from './TripCard.jsx';
import NavBar from './NavBar.jsx';
import Form from './Form.jsx'
import Dropdown from './Dropdown.jsx'



const Dashboard = (props) => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([])

  //const headers = {}

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  }

  useEffect(() => {
    
    fetch('http://localhost:3000/travels', {
      method : 'GET',
      mode: 'cors',
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }
  })
      .then((res) => res.json())
      .then((apple) => {

        setData(apple);

      })
      .catch((err) => {
        log: 'Error was found';
      });
  }, []);


 

  //set all of the prop data to create links in the nav bar
  //create an array of all of the trips
  // const trips = [];
  // for(key in props.data.trips) {
  //   trips.push(<TripCard tripInfo={props.data.trips[key]}/>)
  // }

  return(
    <div className='page'>
      <NavBar data={data}>
      </NavBar>
      <Dropdown data={data}/>
      
    </div>
  )
}

//  <NavBar trips={trips} handleIndexChange={handleIndexChange}/>
//{trips[index]}


export default Dashboard;