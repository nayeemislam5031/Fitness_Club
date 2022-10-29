import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Container fluid className="footer bg-dark p-4">
      <Row>
        <Col sm xs lg="12" className="info">
          <p>
            1800 Lihu Blvd, BinHu Qu, WuXi Shi,
            <br /> Jiang Su Sheng, China, 214126
          </p>
          <p>Email: Random@example.com</p>
        </Col>
      </Row>
      <Row className="btn-row">
        <Col className="btn-info">
          <Stack spacing={2} direction="row">
            <IconButton
              spacing={2}
              color="primary"
              aria-label="upload picture"
              component="label"
              href="#outlined-buttons"
            >
              <Facebook fontSize="small" className="icon" />
            </IconButton>

            <IconButton
              spacing={2}
              color="primary"
              aria-label="upload picture"
              component="label"
              href="#outlined-buttons"
            >
              <Twitter fontSize="small" className="icon" />
            </IconButton>

            <IconButton
              spacing={2}
              color="primary"
              aria-label="upload picture"
              component="label"
              href="#outlined-buttons"
            >
              <Instagram fontSize="small" className="icon" />
            </IconButton>

            <IconButton
              spacing={2}
              color="primary"
              aria-label="upload picture"
              component="label"
              href="#outlined-buttons"
            >
              <YouTube fontSize="small" className="icon" />
            </IconButton>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer