import Login from './LogIn.jsx';
//import SignUp from './SignUp';
//import Dashboard from './Dashboard';
//import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard.jsx';


/*
  Login -> get user data
    Dashboard -> userData = userData
      Set the nav bar for each key in the trips object
      Within dashboard you have to make an array of trip card with an index
      Once they click on the index you update the current index in dashboard and it changes the card
      Once they click on one of the trips
        populate the TripCard based on the trip they click

  {
    user: username,
    password: password,
    trips: {
      trip1: {
        location: City,
        startDate: Date,
        endDate: Date,
        packing list: [Array of items to pack],
        itinerary: [Array in order of what to do],
        notes: [Array of notes]
      },
      trip2: {
        location: City,
        startDate: Date,
        endDate: Date,
        packing list: [Array of items to pack],
        itinerary: [Array in order of what to do],
        notes: [Array of notes]
      },
    }
  }
*/
export default function App() {
  return(
    <>
      <div className="container">
       <Dashboard data={{}} />
        {/* <Routes>
          <Route path= '/' element={<Login />} />
          <Route path= '/dashboard' element={<Dashboard />} />
          <Route path= '/signup' element={<SignUp />} />
        </Routes> */}
      </div>
    </>
  )
}