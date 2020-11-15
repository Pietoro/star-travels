import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logoLight from './logo_light.svg'
import logoDark from './logo_dark.svg'
import { TripList } from './components/TripList'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledHeader = styled.header`
  background-color: var(--header-bg-col);
  display: flex;
  justify-content: space-between;
  height: 6rem;
  align-items: center;
  border-bottom: 2px solid black;

  img {
    height: 5rem;
    margin-left: 1rem;
  }

  button {
    background-color: hsl(270, 100%, 45%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
`

const StyledMain = styled.main`
  flex-grow: 1;
`

const StyledFooter = styled.footer`
  background-color: var(--header-bg-col);
  border-top: 2px solid black;
  height: 3rem;
  text-align: center;
`

const InlineBlock = styled.div`
  display: inline-block;
  margin: 0.5rem;
`

function App() {
  const [isLightMode, setIsLightMode] = useState(true)
  useEffect(() => document.querySelector('html')
    .setAttribute('data-theme', isLightMode ? 'light' : 'dark'), 
    [isLightMode])

  return (
    <StyledContainer>
      <StyledHeader>
        <div>
          {isLightMode ? <img src={logoLight} alt="StarTravels"/> : <img src={logoDark} alt="StarTravels"/>}
        </div>
        <div>
          <InlineBlock>
            <button onClick={() => setIsLightMode(!isLightMode)}>Light/Dark Mode</button>
          </InlineBlock>
          <InlineBlock>Log In</InlineBlock>
        </div>
      </StyledHeader>
      <StyledMain>
        <TripList/>
      </StyledMain>
      <StyledFooter>
        Long live Klingon Empire
      </StyledFooter>
    </StyledContainer>
  )
}

export default App
