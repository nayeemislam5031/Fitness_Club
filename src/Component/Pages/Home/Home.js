import React from 'react'
import { Container } from 'react-bootstrap'
import Breffing from './Breffing';
import Caro from './Caro';
import './Home.css'







const Home = () => {
  return (
    <Container>
      <div className="p-3 mb-1 mt-2 text-danger Heading ">
        <h1>Wuxi's Smartest Private Training GYM </h1>
      </div>
      <Caro></Caro>
      <Breffing></Breffing>
      
    </Container>
  );
}

export default Home