import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTripContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
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
  background-color: var(--primary-col);
  color: white;
  padding: 0.5rem;
`


export const TripListItem = ({trip}) => {


  const price = trip.price
  const city = trip.hotel.city
  const dockFromCity = trip.dockFrom.city;

  return (
    <li key={`trip_${trip.id}`}>
      <StyledTripContainer>
        <StyledLeftContainer>
          <StyledImg></StyledImg>
        </StyledLeftContainer>
        <StyledMiddleContainer>
          {city.planet.name}, {city.name}
          <div>
            {trip.hotel.name}
          </div>
          <div>
            <b>From: </b>{dockFromCity.planet.name}, {dockFromCity.name}
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
            {price}
          </StyledPriceDiv>
          <Link to={`/trips/${trip.id}`}>
            <StyledSeeMoreLink>See more</StyledSeeMoreLink>
          </Link>
        </StyledRightContainer>
      </StyledTripContainer>
      </li>
  )
}
