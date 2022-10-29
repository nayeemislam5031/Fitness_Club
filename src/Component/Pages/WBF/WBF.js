import { Container, Typography } from "@mui/material";
import * as React from "react";
import './WBF.css' 
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";



function WBF() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fluid>
        <Box sx={{ width: "100%" }}>
          <Typography
            m={4}
            variant="h3"
            color="salmon"
            align="center"
            gutterBottom
          >
            The WBF Way
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Whole Body Fitness is a personal training center for people who want
            to transform their quality of life.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Based on the knowledge and guidance of world-renowned transformation
            specialist Angelo Poli, Whole Body Fitness was built upon the
            philosophy that every individual is unique with different
            challenges, limitations, needs, and goals.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Whole Body Fitness members include people who:
          </Typography>
          <Typography mb ={4} variant="" gutterBottom>
            <li>Want to maintain or regain an active lifestyle</li>
            <li>
              Are rehabilitating after injury or illness or are experiencing
              chronic pain
            </li>
            <li>
              Are athletes looking to take their performance to the next level
            </li>
            <li>Want to get back – or stay – in great shape! </li>
          </Typography>
          <br/>
          <br/>
          <Typography variant="body1" gutterBottom>
            Our holistic approach starts by understanding where you are now and
            where you would like to be. Then, our individualized, trainer-driven
            program yields dramatic results by focusing first on postural
            alignment and flexibility. Next, we help you build strength to
            stabilize your body structure, leading to better balance, mobility,
            and fitness. Each program is customized to the unique needs of every
            member. We call this “The WBF Way” and it’s embedded into the DNA of
            everything we do.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Whole Body Fitness is not a “big box”, 20 treadmills in a row type
            of gym. Yes, we have cardio machines but we’re all about personal
            training and small group classes, always customized for your
            particular needs and goals. Equally important is the atmosphere of
            support, camaraderie, and fun. You will never feel out of place no
            matter your age, body type, or condition.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We believe it’s important to communicate to our members and
            newcomers that we are taking rigorous precautions to prevent the
            spread of COVID-19 and following guidelines from the State of
            California. Whole Body Fitness is a semi-private boutique gym with a
            limited number of members. We are a dramatically safer place to
            workout than a large, crowded public gym with thousands of clients.
          </Typography>
          <br />
          <Typography mb={4} variant="body1" gutterBottom>
            The WBF Way has transformed countless lives and brings joy to the
            work that we do each day. We would be honored to meet with you in a
            free, no-pressure consultation.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default WBF