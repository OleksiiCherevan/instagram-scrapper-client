import styled from "styled-components";
import users from "../store/users";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const StyledSearchUser = styled.form`
    /* height: 100%; */
    /* max-height: 40px; */
    height: 40px;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    /* padding: 0 10px; */

    border: 2px white solid;
    border-radius: 30px;

    & :nth-child(1) {
        margin-left: 10px;
        width: 100%;   
        border : none;
        background: transparent;
        color: white;
        font-size: 1.2rem;

        
    }

    & :nth-child(2) {
        height: 100% ;
        border-radius: 50px;
        transition: all .3s;

        color: white;
        border: none;
        background: rgb(178,161,255);
        background: linear-gradient(90deg,rgba(178,161,255,1) 0%,rgba(252,81,255,1) 37%,rgba(101,66,255,1) 70%,rgba(44,138,255,1) 100%);

        &:hover {
            transform: scale(1.2);
        }
    }
`

const Info = styled.span`
    color: white;
    font-size: 1.3rem;
    padding-bottom: 5px;
`;

const SearchUser = observer(() => {
    const [nameToSearch, setNameToSearch] = useState("");

    const handleSearchClick = (e) => {
        e.preventDefault();
        users.fetchUserInfo(nameToSearch);
    };
    return (
        <StyledSearchUser onSubmit={handleSearchClick}>
            {/* <Info>Знайти про інформацію користувача: </Info> */}
            
            <input
                type="text"
                onChange={(e) => setNameToSearch(e.target.value)}
                value={nameToSearch}
            />
            <input
                type="submit"
                value="знайти"
            />
        </StyledSearchUser>
    );
});
export default SearchUser;
