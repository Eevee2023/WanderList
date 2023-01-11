import { useEffect, useState } from 'react';
import TripCard from './TripCard.jsx';
import NavBar from './NavBar.jsx';
import Form from './Form.jsx'
import Dropdown from './Dropdown.jsx'



const Dashboard = (props) => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([])
  const [cards, setCards] = useState([]);

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
  useEffect(() => {
    const trips = [];
    console.log('data',data);
    for(let i = 0; i < data.length; i++) {
      trips.push(<TripCard data={data[i]}/>)
    }
    setCards(trips);
  }, [data])

  return(
    <div>
      <NavBar data={data} handleIndexChange={handleIndexChange}> 
      </NavBar>
      {cards[index]}
    </div>
  )
}

//  <NavBar trips={trips} handleIndexChange={handleIndexChange}/>
//{trips[index]}


export default Dashboard;