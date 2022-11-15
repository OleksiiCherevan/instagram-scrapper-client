import { useRef, useState } from "react"
import styled from "styled-components"
import users from "../store/users"

const StyledHeader = styled.div`
  height: 100px;
  background: rgb(178,161,255);
  background: linear-gradient(90deg, rgba(178,161,255,1) 0%, rgba(252,81,255,1) 37%, rgba(101,66,255,1) 70%, rgba(44,138,255,1) 100%);
`

const Navigation = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Info = styled.span`
  color: white;
  font-size: 1.3rem;
  padding-bottom: 5px;
`
function Header({}) {
  const [nameToSearch, setNameToSearch] = useState("");

  const handleSearchClick = () => {
    users.fetchUserInfo(nameToSearch)
  } 
  return (
    <StyledHeader>
      <Navigation>
        <Info>Знайти про інформацію користувача: </Info>
        <input type="text" onChange={e => setNameToSearch(e.target.value)} value={nameToSearch}/>
        <input type="button" value="знайти" onClick={() => handleSearchClick()}/>
      </Navigation>
    </StyledHeader>
  )
}
export default Header