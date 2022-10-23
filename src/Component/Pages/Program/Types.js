import React from 'react'
import './Types.css'
import { Container,Row,Col,Figure } from 'react-bootstrap';
import PrivateTrainer from '../../../assets/privateTraining.jpg'
import semiPrivate from '../../../assets/semi_private.jpg'
import Group from '../../../assets/Group.jpg'

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
          <p className="detail">
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
              src={semiPrivate}
            />
          </Figure>
        </Col>
        <Col sm className="col">
          <h4>Semi-Private Training</h4>
          <p className="detail">
            Semi-Private Training is perfect for those wanting customized
            training but with the camaraderie of 2 or 3 other members.
          </p>
          <p className="detail">
            Members meet with their personal trainer 2 to 4 days a week
            (depending on your plan) for an individualized 45-minute workout.
            Work-outs are custom to each member, even when working out at the
            same time as others. Your trainer will prescribe an individualized
            program for your optional independent day workouts. Unlimited group
            classes are included.
          </p>
        </Col>
      </Row>

      <Row className="row">
        <Col sm>
          <Figure>
            <Figure.Image width={450} height={600} alt="171x180" src={Group} />
          </Figure>
        </Col>
        <Col sm>
          <h4>Group Classes</h4>
          <p className="detail">
            Prefer to train in a larger group setting? Our group class program
            combines fitness workouts with our unique Postural Programming
            techniques.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Types