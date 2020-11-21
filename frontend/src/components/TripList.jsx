import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import styled from 'styled-components'

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

  const StyledContainer = styled.div`
    margin: 1.5rem 0;
    border: 1px solid black;
    display: inline-block;
    width: 95%;
  `

  const StyledUl = styled.ul`
    list-style: none;
  `

  const StyledTripContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid blue;
    margin: 1rem;
  `

  const StyledLeftContainer = styled.div`

  `

  const StyledImg = styled.div`
    background-color: black;
    width: 15rem;
    height: 15rem;
  `

  const StyledMiddleContainer = styled.div`
    padding: 0.5rem;
    text-align: left;
    border-right: 1px solid lightgray;
    flex-grow: 1;
  `

  const StyledRightContainer = styled.div`
    padding-top: 0.5rem;
    width: 20rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

  const StyledPriceDiv = styled.div`
      
  `

  const StyledSeeMoreLink = styled.div`
    background-color: lightgreen;
    padding: 0.5rem;
  `



  useEffect(() => downloadData(), [])

  return (
    <StyledContainer>
      <StyledUl>
        {tripData.map((trip) => 
        <li key={`trip_${trip.id}`}>
          <StyledTripContainer>
            <StyledLeftContainer>
              <StyledImg></StyledImg>
            </StyledLeftContainer>
            <StyledMiddleContainer>
              {trip.hotel.city.planet.name}, {trip.hotel.city.name}
              <div>
                {trip.hotel.name}
              </div>
              <div>
                <b>From: </b>{trip.dockFrom.city.planet.name}, {trip.dockFrom.city.name}
              </div>
              <div>
                {trip.boardType.code}
              </div>
              <div>
                {trip.promoted ? <span>&#9733;</span> : undefined}
              </div>
            </StyledMiddleContainer>
            <StyledRightContainer>
              {trip.departureDate} - {trip.returnDate}
              <StyledPriceDiv>
                {trip.price}
              </StyledPriceDiv>
              <StyledSeeMoreLink>See more</StyledSeeMoreLink>
            </StyledRightContainer>
          </StyledTripContainer>
          
          
          </li>)
        }
      </StyledUl>
    </StyledContainer>
  )
}
