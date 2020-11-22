import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 45%;
  border: 1px solid lightgray;
  padding: 1.5rem;
`

const StyledFormField = styled.label`
  display: block;
  text-align: left;
`

const StyledLabel = styled.div`
  font-size: 1.5rem;
`

const StyledTextInput = styled.input.attrs({ type: "text" })`
  border: 1px solid lightgray;

`

const StyledDateInput = styled.input.attrs({ type: "date" })`
  border: 1px solid lightgray;

`

const StyledSearchButton = styled.div`
  padding: 0.5rem; 
  background-color: var(--primary-col);
  color: white;
  text-decoration: none;
  font-weight: bold;
`


export const SearchForm = () => {

  const [planetName, setPlanetName] = useState('')
  const [cityName, setCityName] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const url = `/trips?` +
    (planetName ? `planetName=${planetName}&` : '') +
    (cityName ? `cityName=${cityName}&` : '') +
    (departureDate ? `departureDate=${departureDate}&` : '') +
    (returnDate ? `returnDate=${returnDate}` : '')

  return (
    <StyledForm>
      <StyledFormField>
        <StyledLabel>Planet: </StyledLabel>
        <StyledTextInput value={planetName} onChange={(ev) => setPlanetName(ev.target.value)}/>
      </StyledFormField>
      <StyledFormField>
        <StyledLabel>City: </StyledLabel>
        <StyledTextInput value={cityName} onChange={(ev) => setCityName(ev.target.value)}/>
      </StyledFormField>
      <StyledFormField>
        <StyledLabel>Departure date: </StyledLabel> 
        <StyledDateInput value={departureDate} onChange={(ev) => setDepartureDate(ev.target.value)}/>
      </StyledFormField>
      <StyledFormField>
        <StyledLabel>Return date: </StyledLabel>
        <StyledDateInput value={returnDate} onChange={(ev) => setReturnDate(ev.target.value)}/>
      </StyledFormField>
      <Link to={url}>
        <StyledSearchButton>Search</StyledSearchButton>
      </Link>
    </StyledForm>
  )
}
