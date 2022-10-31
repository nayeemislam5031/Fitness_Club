import React from 'react'
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Fade } from 'react-reveal';
import './pricing.css'
const Pricing = () => {
  return (
    <Container className="m-4 price fluid " align="center">
      <Row className="m-4 pt-4">
        <Fade right>
          <h1 className=" title">
            <strong>Pricing</strong>
          </h1>
        </Fade>
      </Row>
      <Row className="justify-content-md-center pb-4">
        <Col sm xs lg="8">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Private Training</Accordion.Header>
              <Accordion.Body>
                <p className="detail">
                  Pricing upon request. Please schedule a one-on-one
                  consultation.
                </p>
                <p className="detail">
                  To schedule a complimentary consultation, visit our online
                  scheduler at the bottom of this page and pick an appointment
                  day and time that works for you. We will be honored to meet
                  with you!
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Semi-Private Training</Accordion.Header>
              <Accordion.Body>
                <p className="detail">
                  Pricing includes initial New Member Evaluation, Trainer Days,
                  unlimited Independent Days, and unlimited Group Classes.
                  Month-to-month, no contracts. There is a $95 registration fee
                  for new members
                </p>
                <p className="detail">
                  <li>2 Trainer Days Per Week=$295 monthly</li>
                  <li>3 Trainer Days Per Week=$350 monthly</li>
                  <li>4 Trainer Days Per Week=$400 monthly</li>
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Group Classes</Accordion.Header>
              <Accordion.Body>
                <p className="detail">
                  Unlimited group classes for $175 per month.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing