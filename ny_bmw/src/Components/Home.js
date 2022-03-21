import React from 'react';
import styled from 'styled-components'
import homePic from '../img/Inkedtrio_LI_ccexpress.jpeg'




const Container = styled.div`
      display: flex;
      flex-direction: row;
      margin: 1rem;
      background-image: url(${homePic});
      justify-content: center;
      background-size: cover;
      width: auto;
      height: 94vh;

      @media screen and (max-width: 706px) {
        width: auto;
        height: 80em;
        justify-content: center;
        background-size: cover;
      }

`;

const BannerL = styled.div`
      margin-top: 1rem;
      margin-left: 4rem;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      height: 6rem;
      margin-bottom: 2rem;
      justify-self: start;
      font-size: 2rem;
      color: white;
      text-shadow: 6px 6px 10px red;

      @media screen and (max-width: 760px) {

        font-size: 1.5rem;
       
      }
`;
const BannerR = styled.div`
      margin-top: 2rem;
      margin-right: 2rem;
      padding-top: 2rem;
      padding-left: 26em;
      display: flex;
      flex-direction: block;
      height: 6rem;
      margin-bottom: 2rem;
      padding-bottom: 20em;
      justify-self: end;
      font-size: 2rem;
      color: darkblue;
      text-shadow: 3px 3px 6px silver;
      color: ;
    

      @media screen and (max-width: 760px) {

        font-size: 1.5rem;
        margin-top: 0rem;
        padding-right: 1rem;
        padding-left: 6em;
      }
`;


function Home() {
  return (
  
      <Container>
        <BannerL>
          <h1> New York Chapter</h1>
        <h3> BMW Car Club of America</h3>  
        </BannerL>
        <BannerR>
          <h3>The ultimate car club experience</h3>
        </BannerR>
        </Container>  
    


   
     
  )
}

export default Home;