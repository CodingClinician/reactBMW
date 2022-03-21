import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Navigation = styled.nav`
 
        height: 12rem;
        width: auto;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        

        @media (max-width: 768px) {
          flex-direction: column;
         align-items: start;
         justify-content: space-around;
         padding-left: 22rem;
         padding-top: 1rem;
        }
  `;

const Linkie = styled(Link) `
        text-decoration:none;
        font-size: 1.5rem;

        &: hover {
          color: red;
        }

        &: focus {
          text-decoration: overline underline solid red;
          font-size: 2rem;
        }
        
`;

const Logo = styled.div`
          float: left;
          position: absolute;
          width: 10em;
         height: 8em;
        padding-left: 1rem;
        padding-top: 2rem;

         @media (max-width: 768px) {
          width: 12em;
          height: auto;
         }

`;








function Navbar() {
  return (
   <> 
  <Logo>
      <img src = "./images/chapLogo2.png" alt='chapter logo' />
  </Logo>
    <Navigation>
        <Linkie to="/"> Home</Linkie>
        <Linkie to="/About"> About</Linkie>
        <Linkie to="/Calendar"> Calendar</Linkie>       
    </Navigation>
    </>
  )
}

export default Navbar;