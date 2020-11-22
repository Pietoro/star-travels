import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


const StyledContainer = styled.div`
  margin: 1rem;
  border-bottom: 1px solid lightgray;
  text-align: left;
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  border-bottom: none;
`

const StyledImgContainer = styled.div`

`

const StyledImg = styled.div`
  background-color: black;
  width: 20rem;
  height: 20rem;
`

const StyledHeader = styled.div`
  padding: 0.5rem 1rem;
  flex-grow: 1;
  
  div {
    font-size: 5rem;
  }
`

const StyledAccomodationInfo = styled.div`
  flex-shrink: 0;
  width: 20rem;
  padding: 3rem 1rem;
  background-color: hsl(0,0%,95%);
`
const StyledHotelDescription = styled.div`
  padding: 3rem 1rem;
`

const StyledDockInfo = styled.div`
  padding: 3rem 1rem; 
  width: 50%;
`

const StyledIndent = styled.div`
  padding-left: 2rem;
`

const StyledBooking = styled.div`
  width: 50%;
  background-color: hsl(0,0%,95%);
  padding: 3rem 1rem; 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const API = '/api/trips/'

export const TripDetails = () => {

  const id = useParams().id
  const [tripData, setTripData] = useState(undefined)

  useEffect(() => {
    const downloadData = async() => {
      try {
        const response = await axios.get(`${API}${id}`)
        setTripData(response.data)
      } catch (error) {
        setTripData(undefined)
      }
    }
    downloadData()
  }, [id])


  return tripData ? <TripDetailsView trip={tripData}/> : <div>Trip not found</div>
}

const TripDetailsView = ({ trip }) => {

  return (
    <StyledContainer>
      <StyledRow>
        <StyledImgContainer>
          <StyledImg></StyledImg>
        </StyledImgContainer>
        <StyledHeader>
          <div>
            <b>{trip.hotel.city.planet.name}, {trip.hotel.city.name}</b>
          </div>
          <div>
            {trip.hotel.name}
          </div>
        </StyledHeader>
      </StyledRow>
      <StyledRow>
        <StyledAccomodationInfo>
          <div>
            { Array.from({ 
              length: trip.hotel.standard.stars 
            }).map((_) => '*')
            }
          </div>
          <div>{trip.boardType.description}</div>
        </StyledAccomodationInfo>
        <StyledHotelDescription>
          Description: {trip.hotel.description}This is a very loooooooooooooooooooong trip description
        </StyledHotelDescription>
      </StyledRow>
      <StyledRow>
        <StyledDockInfo>
          <div>Departing dock:</div>
          <StyledIndent>{trip.dockFrom.name}</StyledIndent>
          <StyledIndent>{trip.dockFrom.city.name}, {trip.dockFrom.city.planet.name}</StyledIndent>
          <div>Arrival dock:</div>
          <StyledIndent>{trip.dockTo.name}</StyledIndent>
          <StyledIndent>{trip.dockTo.city.name}, {trip.dockTo.city.planet.name}</StyledIndent>
        </StyledDockInfo>
        <StyledBooking>
          <div>{trip.departureDate} - {trip.returnDate}</div>
          <div>Available places: {trip.availablePlaces}</div>
          <div>{trip.price}GPL</div>
          <div>BUY</div>
        </StyledBooking>
      </StyledRow>
    </StyledContainer>
  )
}