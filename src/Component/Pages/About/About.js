import * as React from "react";
import {
  CssBaseline,
  Container,
  Typography,
  Box,
  
} from "@mui/material";
import { Row, Form, Button } from "react-bootstrap";
import { Col } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import image from '../../../assets/Workout.svg';



// const handleSubmit = () => {
//     console.log("submited")
// }


const About = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container align="center">
        <Box sm={6} sx={{ width: "100%", maxWidth: 800 }} mb={4}>
          <Typography
            m={4}
            variant="h3"
            color="salmon"
            align="center"
            gutterBottom
          >
            Contact Whole Body Fitness
          </Typography>

          <Typography variant="body1" gutterBottom align="left">
            Our holistic approach starts by understanding where you are now and
            where you would like to be. Then, our individualized, trainer-driven
            program yields dramatic results by focusing first on postural
            alignment and flexibility. Next, we help you build strength to
            stabilize your body structure, leading to better balance, mobility,
            and fitness. Each program is customized to the unique needs of every
            member. We call this “The WBF Way” and it’s embedded into the DNA of
            everything we do.
          </Typography>

          <Typography mt-mb={2} variant="body1" gutterBottom align="left">
            If you prefer to email first, please fill out the form below and
            tell us a little about yourself. We will get back to you soon.
          </Typography>
        </Box>

        <Row className="justify-content-md-center m-4 " m={4}>
          <Col lg="5" className="justify-content-md-center">
            <Form align="left">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group
                align="left"
                className="mb-3"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button align="left" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col lg="5" className="justify-content-md-center p-4 m-4 ">
            <Fade left className="svg">
              <img src={image} alt="" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default About
