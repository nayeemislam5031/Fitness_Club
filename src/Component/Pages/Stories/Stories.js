import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './Story.css';
import MOCK_DATA from './MOCK_DATA.json';
import Fade from "react-reveal/Fade";


const Stories = () => {
  return (
    <Container fluid>
      <Row className="p-4 ">
        <Fade left>
          <h1 className=" title">Mamber Stories</h1>
        </Fade>
      </Row>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 m-4">
        {MOCK_DATA.map((mocData) => {
          const { title, image, discription } = mocData;

          return (
            <Col className="story">
              <Card sx={{ width: 345, height: 400 }}>
                <CardMedia
                  component="img"
                  height="140"
                  sx={{ padding: ".25em .25em 0 .25em", objectFit: "contain" }}
                  image={image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="black" textAlign="left">
                    <p>{discription}</p>
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Stories