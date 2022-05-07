import React from 'react'
import styled from 'styled-components'

const StyledSectionMain = styled.section`
  background-image: url('../media/img_hero.jpg');
  color: #fff;
  height: 65vh;
  background-position: right;
  background-size: cover;

  .main__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }

  h1 {
    margin: -50px 0 0;
    color: #4f4d53;
    font-size: 100px;
    font-weight: 900;
  }
`
const StyledSectionContainer = styled.div`
  max-width: 50%;
  margin: auto;
  height: 100%;
`

const SectionUp = () => {
  return (
    <StyledSectionMain>
      <StyledSectionContainer>
        <div className='main__wrapper'>
          <h1>Hello, we’re gtd.</h1>
        </div>
      </StyledSectionContainer>
    </StyledSectionMain>
  )
}

export default SectionUp