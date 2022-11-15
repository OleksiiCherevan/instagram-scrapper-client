import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    max-width: 1070px;
    margin: 0 20px;
`

function Container({children}) {
  return (
    <StyledContainer>
        <Wrapper>
            {children}
        </Wrapper>
    </StyledContainer>
  )
}

export default Container