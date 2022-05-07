import React from 'react'
import styled from 'styled-components';
import FooterTeam from '../atom/FooterTeam';
import FooterLearnMore from '../atom/FooterLearnMore';
import FooterMeetUs from '../atom/FooterMeetUs';
import FooterContact from '../atom/FooterContact';

const StyledFooter = styled.footer`
  background-color: #4f4d53;
  border-top: 12px solid #e8be02;
  height: 320px;
`

const StyledFooterContainer = styled.div`
  max-width: 50%;
  margin: auto;
  height: 100%;
`
const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 50px;
  color: #fff;
`

const StyledFooterColumn = styled.div`
  h3 {
    color: #e8be02;
    font-weight: 900;
    font-size: 20px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
  }

  ul li h4{
    margin: 5px 0;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterWrapper>
          <FooterTeam />
          <FooterLearnMore />
          <FooterMeetUs />
          <FooterContact />
        </StyledFooterWrapper>
      </StyledFooterContainer>
    </StyledFooter>
  )
}

export default Footer