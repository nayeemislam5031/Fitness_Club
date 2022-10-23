import React from 'react'
import './Footer.css'
import { Col, Container, Row,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';







const Footer = () => {
  return (
    <Container className="footer bg-dark">
      <Row>
        <Col sm xs lg="12" className="info">
          <p>
            1800 Lihu Blvd, BinHu Qu, WuXi Shi,
            <br /> Jiang Su Sheng, China, 214126
          </p>
          <p>Email: Random@example.com</p>
        </Col>
      </Row>
      <Row>
        <Col className="btngroup">
          <Button variant="secondary" className="button">
            <FontAwesomeIcon icon={faInbox} />
          </Button>
          <Button variant="secondary" className="button">
            <FontAwesomeIcon icon={faInbox} />
          </Button>
          <Button variant="secondary" className="button">
            <FontAwesomeIcon icon={faInbox} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer