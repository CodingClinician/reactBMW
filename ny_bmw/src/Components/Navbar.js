import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Navigation = styled.nav`
 
        background: aqua;
        height: 10rem;
        width: auto;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        

        @media (max-width: 768px) {
          flex-direction: column;
         align-items: start;
         justify-content: space-around;
         padding-left: 14em;
        }
  `;

const Linkie = styled(Link) `
        text-decoration:none;
        font-size: 1.5rem;

        &: hover {
          color: white
        }

        &: focus {
          text-decoration: underline overline solid red;
          font-size: 2rem;
        }
        
`;

const Logo = styled.div`
          float: left;
          position: absolute;
          width: 12em;
         height: 10em;
         background: green;

         @media (max-width: 768px) {
          width: 12em;
          height: auto;
         }

`;








function Navbar() {
  return (
   <> 
  <Logo>Logo</Logo>
    <Navigation>
        <Linkie to="/"> Home</Linkie>
        <Linkie to="/About"> About</Linkie>
        <Linkie to="/Calendar"> Calendar</Linkie>       
    </Navigation>
    </>
  )
}

export default Navbar;