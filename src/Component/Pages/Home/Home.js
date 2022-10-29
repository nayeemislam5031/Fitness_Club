import React from 'react'
import { Container } from 'react-bootstrap'
import Programs from '../Program/Programs';

import Breffing from './Breffing';
import Caro from './Caro';
import './Home.css'
import Bounce from "react-reveal/Bounce";






const Home = () => {
  return (
    <Container>
      <div className="p-3 mb-1 mt-4 text-danger Heading ">
        <Bounce left cascade>
          <h1 className="mt-2">
          <strong>Wuxi's Smartest Private GYM </strong>
          </h1>
        </Bounce>
        
      </div>
      <div>
      <Caro></Caro>
      <Breffing></Breffing>
      <Programs></Programs>
      
      </div>
      
    </Container>
  );
}

export default Home