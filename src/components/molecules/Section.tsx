import React from 'react'
import logo1 from '../media/img_lisa_circle.png'
import logo2 from '../media/img_danielle_circle.png'
import logo3 from '../media/img_brian_circle.png'
import styled from 'styled-components';

const StyledSectionContainer = styled.div`
  max-width: 50%;
  margin: auto;
  height: 100%;
`
const StyledSection = styled.div`
    margin: 0;
    text-align: center;

  .about-us__team-members {
    display: flex;
    justify-content: space-around;
    margin-top: -100px;
  }

  .about-us__team-members img {
    height: 200px;
    border-radius: 50%;
    width: 200px;
  }

  .about-us__heading {
    color: #e8be02;
    font-size: 64px;
    font-weight: 900;
  }

  .about-us__description {
    color: #4f4d53;
    font-size: 20px;
    line-height: 1.5;
  }

  .about-us__team-members-info {
    display: flex;
    justify-content: space-around;
    margin: 80px 0;
  }

  .about-us__team-members-info .about-us__team-member {
    display: flex;
  }
  .about-us__team-members-info .about-us__team-member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .about-us__team-members-info
  .about-us__team-member
  .about-us__team-member__info {
    padding-left: 35px;
    text-align: left;
  }

  .about-us__team-members-info
  .about-us__team-member
  .about-us__team-member__info
    h4 {
    margin-bottom: 0;
    color: #e8be02;
  }
  .about-us__team-members-info
  .about-us__team-member
  .about-us__team-member__info
    p {
    margin-top: 3px;
    margin-bottom: 0;
  }
`


const Section = () => {
  return (
    <StyledSection>
      <StyledSectionContainer>
        <div className='about-us__wrapper'>
          <div className='about-us__team-members'>
            <img src={logo1} alt="lisa gtd" />
            <img src={logo2} alt="danielle gtd" />
            <img src={logo3} alt="brian gtd" />
          </div>
          <h2 className='about-us__heading'>How it started</h2>
          <p className='about-us__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
            ulpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className='about-us__team-members-info'>
            <div className='about-us__team-member'>
              <img src={logo1} alt="lisa gtd" />
              <div className='about-us__team-member__info'>
                <h4>Lisa</h4>
                <p>lisa@gtd.co</p>
              </div>
            </div>
            <div className='about-us__team-member'>
              <img src={logo2} alt="danielle gtd" />
              <div className='about-us__team-member__info'>
                <h4>Danielle</h4>
                <p>danielle@gtd.co</p>
                <p>(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </StyledSectionContainer>
    </StyledSection>
  )
}

export default Section