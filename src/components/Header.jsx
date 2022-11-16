import { useRef, useState } from "react"
import styled from "styled-components"
import SearchUser from "./SearchUser"

const StyledHeader = styled.div`
  height: 100px;
  background: rgb(178,161,255);
  background: linear-gradient(90deg, rgba(178,161,255,1) 0%, rgba(252,81,255,1) 37%, rgba(101,66,255,1) 70%, rgba(44,138,255,1) 100%);
`

const Navigation = styled.span`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`


const Header = ({ }) => {
  

  return (
    <StyledHeader>
      <Navigation>
        <span>Для пошуку інформації про користувача введіть його nickname</span>
        <SearchUser />
      </Navigation>
    </StyledHeader>
  )
}

export default Header