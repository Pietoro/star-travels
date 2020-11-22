import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TripListItem } from './TripListItem';

const StyledContainer = styled.div`
  margin: 1.5rem 0;
  display: inline-block;
  width: 95%;
`

const StyledUl = styled.ul`
  list-style: none;
`

const API = '/api/trips'
const API_PROMOTED = '/api/trips/promoted'

export const TripListContainer = ({promoted, cityName, planetName, departureDate, returnDate}) => {
  const [tripData, setTripData] = useState([])
  

  useEffect(() => {
    const downloadData = async() => {
      try {
        const response = await axios.get(promoted ? API_PROMOTED : API, {
          params: {
            cityName,
            planetName,
            departureDate,
            returnDate
          }
        })
        setTripData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    downloadData()
  }, [cityName, planetName, departureDate, returnDate, promoted])

  return <TripList tripData={tripData}/>
}

export const TripList = ({tripData}) => {
  return (
    <StyledContainer>
      <StyledUl>
        {tripData.map((trip) =>
          <TripListItem trip={trip}/>
        )
        }
      </StyledUl>
    </StyledContainer>
  )
}
