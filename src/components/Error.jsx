import styled from "styled-components";

const StyledError = styled.div`
    height: 50vh;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    font-weight: 600;
`;

function Error({ children }) {
    return <StyledError>{children}</StyledError>;
}
export default Error;
