import React from 'react'
import styled from 'styled-components';
import ImageHeader from '../atom/ImageHeader';

const StyledHeader = styled.header`
    background-color: #4f4d53;
    height: 48px;
`

const StyledHeaderContainer = styled.div`
  max-width: 50%;
  margin: auto;
  height: 100%;
`
const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderWrapper>
          <ImageHeader />
        </StyledHeaderWrapper>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header