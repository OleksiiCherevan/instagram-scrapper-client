import { useEffect, useState } from "react";
import styled from "styled-components";
import users from "../store/users";
import MOCK_DATA from "./../assets/mock_data.json";
import { observer } from 'mobx-react-lite';
import Preloader from "./Preloader";
import Error from "./Error";

const StyledMain = styled.div`
    margin-top: 40px;
`;

const ProfileImage = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;


    & div {
        position: relative;
        height: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50000px;

        background: linear-gradient(to right, #8e5ae5, #d76cd8);

        display: grid;
        place-items: center;
        transition: all .5s;
           
    &:hover {
        transform: scale(1.2);
    }
    }

    & img {
        width: 92%;
        aspect-ratio: 1;

        border-radius: 100%;
        border: 5px solid white;
        object-fit: cover;

     
    }
`;

const Info = styled.div``;

const UserName = styled.div`
    font-size: 2rem;
    font-weight: 700;
`;

const MainInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const StyledMainInfoItem = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 10px;

    & :nth-child(1) {
        font-size: 1.2rem;
        font-weight: 600;
        font-size: 20px;
    }
`;

function MainInfoItem({ title, description }) {
    return (
        <StyledMainInfoItem>
            <span>{title}</span>
            <span>{description}</span>
        </StyledMainInfoItem>
    );
}

const ProfileName = styled.div`
    margin-bottom: 10px;
    font-size: 1rem;
    color: #848591;
    font-weight: 600;
`;

const StyledBio = styled.div`
    font-size: 1.2rem;
    text-align: center;

    display: flex;
    justify-content: center;

    & span {
        max-width: 600px;
    }
`;

const Bio = ({ children }) => {
    return (
        <StyledBio>
            <span>{children}</span>
        </StyledBio>
    );
};

const StyledPublicationItem = styled.div`
    flex: 1;
    font-size: 16px;
    text-align: start;

    & img {
        margin-top: 30px;
        width: 100%;
        aspect-ratio: 1;
        border-radius: 20px;
        transition: all 0.3s;

        &:hover {
            transform: translateY(-10px);
            box-shadow: 5px 5px 10px -1px rgba(192, 192, 192, 1);
        }
    }
`;

const PublicationItem = ({ image, date, description }) => {
    return (
        <StyledPublicationItem>
            <img src={image}></img>
            <p>{date}</p>
            <p>{description}</p>
        </StyledPublicationItem>
    );
};

const StyledPublicationItems = styled.div`
    
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const PublicationItems = ({ publications }) => {
    return (
        <StyledPublicationItems>
            {publications?.map((publication) => (
                <PublicationItem
                    key={publication.date + publication.description}
                    {...publication}
                />
            ))}
        </StyledPublicationItems>
    );
};

const PublicationHeader = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
    text-align: start;
`

const Main = observer(() => {
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(users.currentUserInfo)
    }, [users.currentUserInfo])

    if (users.isError) {
        return <Error >Користувач не знайдений!</Error>
    }

    if (users.isLoading) {
        return <Preloader />
    }

    return (
        <StyledMain>
            <div>{user["date"]}</div>
            <ProfileImage>
                <div>
                    <img src={user?.main_image} />
                </div>
            </ProfileImage>

            <Info>
                <UserName>{user?.nickname}</UserName>
                <MainInfo>
                    <MainInfoItem title={user?.main_info?.publications_count} description="публікації" />
                    <MainInfoItem title={user?.main_info?.subscribers_count} description="підписників" />
                    <MainInfoItem title={user?.main_info?.subscribed_count} description="підписаних" />
                </MainInfo>
                <ProfileName>{user?.profile_name}</ProfileName>
                <Bio>
                    <span>{user?.biography}</span>
                </Bio>
            </Info>
            <PublicationHeader>Публікації</PublicationHeader>
            <PublicationItems
                publications={user?.posts}
            ></PublicationItems>
        </StyledMain>
    );
})

export default Main;
