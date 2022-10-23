import React from 'react'
import './Types.css'
import { Container,Row,Col,Figure } from 'react-bootstrap';
import PrivateTrainer from '../../../assets/private_Trainer.jpg'

const Types = () => {
  return (
    <Container>
      <Row className="row">
        <Col sm>
          <Figure>
            <Figure.Image
              width={450}
              height={600}
              alt="171x180"
              src={PrivateTrainer}
            />
          </Figure>
        </Col>
        <Col sm>
          <h4>Private Training</h4>
          <p>
            Private Training is a great plan for someone recovering from an
            injury or illness – or just wanting some VIP treatment! Private
            Training members work one-on-one with their personal trainer 2 to 4
            times per week.
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col sm>
          <Figure>
            <Figure.Image
              width={450}
              height={600}
              alt="171x180"
              src={PrivateTrainer}
            />
          </Figure>
        </Col>
        <Col sm>
          <h4>Private Training</h4>
          <p>
            Private Training is a great plan for someone recovering from an
            injury or illness – or just wanting some VIP treatment! Private
            Training members work one-on-one with their personal trainer 2 to 4
            times per week.
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col sm>
          <Figure>
            <Figure.Image
              width={450}
              height={600}
              alt="171x180"
              src={PrivateTrainer}
            />
          </Figure>
        </Col>
        <Col sm>
          <h4>Private Training</h4>
          <p>
            Private Training is a great plan for someone recovering from an
            injury or illness – or just wanting some VIP treatment! Private
            Training members work one-on-one with their personal trainer 2 to 4
            times per week.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Types