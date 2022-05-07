import React from 'react'
import styled from 'styled-components';

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

const FooterLearnMore = () => {
  return (
    <StyledFooterColumn>
            <h3>Learn More</h3>
            <ul>
              <li>
                <a href="#">
                  <h4>Manifesto</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Works</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Stories</h4>
                </a>
              </li>
            </ul>
          </StyledFooterColumn>
  )
}

export default FooterLearnMore