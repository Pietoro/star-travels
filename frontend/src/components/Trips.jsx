import React from 'react';
import { useLocation } from 'react-router-dom';
import { TripListContainer } from './TripList';


export const Trips = () => {

  const query = new URLSearchParams(useLocation().search)
  const cityName = query.get("cityName") ?? null
  const planetName = query.get("planetName") ?? null
  const departureDate = query.get("departureDate") ?? null
  const returnDate= query.get("returnDate") ?? null

  return (
    <TripListContainer 
      cityName={cityName} 
      planetName={planetName} 
      departureDate={departureDate} 
      returnDate={returnDate}
    />
  )
}