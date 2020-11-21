import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import logoLight from './logo_light.svg'
import logoDark from './logo_dark.svg'
import { TripListContainer } from './components/TripList'
import { RWD_L, RWD_L_SIZE, RWD_XL, RWD_XL_SIZE } from './utils/rwd'

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
  text-align: center;
`

const StyledFooter = styled.footer`
  background-color: var(--header-bg-col);
  border-top: 2px solid black;
  height: 3rem;
  text-align: center;
`

const StyledLogInLink = styled.div`
  display: inline-block;
  margin: 0.5rem;
`

const StyledContent = styled.div`
  width: 100%;
  ${RWD_L} {
    width: ${RWD_L_SIZE}px;
  }
  
  ${RWD_XL} {
    width: ${RWD_XL_SIZE}px;
  }
  display: inline-block;
`

function App() {
  const [isLightMode, setIsLightMode] = useState(true)
  useEffect(() => document.querySelector('html')
    .setAttribute('data-theme', isLightMode ? 'light' : 'dark'), 
    [isLightMode])

  return (
    <Router>
      <StyledContainer>
        <StyledHeader>
          <Link to="/">
            <div>
              {isLightMode ? <img src={logoLight} alt="StarTravels"/> : <img src={logoDark} alt="StarTravels"/>}
            </div>
          </Link>
          <div>
              <button onClick={() => setIsLightMode(!isLightMode)}>Light/Dark Mode</button>
              <Link to="/login">
                <StyledLogInLink>
                  Log In
                </StyledLogInLink>
              </Link>
          </div>
        </StyledHeader>
        <StyledMain>
          <StyledContent>
            <Switch>
              <Route path="/login"></Route>
              <Route path="/">
                <TripListContainer promoted={true}/>
              </Route>
            </Switch>
          </StyledContent>
        </StyledMain>
        <StyledFooter>
          Long live Klingon Empire
        </StyledFooter>
      </StyledContainer>
    </Router>
  )
}

export default App
