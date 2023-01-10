import { useState } from 'react';

function TripCard(props) {

  /* 
    Location on left
    Local time in the middle
    See flight info button on right
    Current weather on far right
  */

  return(
    <>
    <div>
      <h1>{props.location}</h1>
      <div>{/*Local time*/}</div>
      <a href='https://www.skyscanner.com/' target="_blank" rel="noreferrer">See Flights</a>
      <div>{/*Weather*/}</div>
    </div>
    <div> 
      
    </div>
    </>
  )
}

export default TripCard;