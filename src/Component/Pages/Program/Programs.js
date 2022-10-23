import React from 'react'
import './Progrm.css'
import { Container } from 'react-bootstrap';
import Intro from'./Into'
import Types from'./Types'
const Programs = () => {
  return (
    <Container>
      <Intro/>
      <Types/>
    </Container>
  )
}

export default Programs