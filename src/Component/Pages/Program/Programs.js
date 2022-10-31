import React from 'react'
import './Progrm.css'
import { Container } from 'react-bootstrap';
import Intro from'./Into'
import Types from'./Types'
import Pricing from './Pricing';
const Programs = () => {
  return (
    <Container align="center">
      <Intro />
      <Types />
      <Pricing />
    </Container>
  );
}

export default Programs