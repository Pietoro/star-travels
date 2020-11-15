import React, { useEffect, useState }  from 'react'
import axios from 'axios'

export const TripList = () => {

  const [tripData, setTripData] = useState([])
  const downloadData = async() => {
    try {
      const response = await axios.get('/api/trips')
      setTripData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => downloadData(), [])

  return (
    <div>
      <ul>
  {tripData.map((trip) => <li>{trip.hotel.name}, {trip.hotel.city.name}, {trip.price}</li>)}
      </ul>
    </div>

  )
}
