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

const FooterContact = () => {
  return (
    <StyledFooterColumn>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#">
                  <h4>Twitter</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Facebook</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Instagram</h4>
                </a>
              </li>
            </ul>
          </StyledFooterColumn>
  )
}

export default FooterContact