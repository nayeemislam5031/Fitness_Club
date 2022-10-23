import React from 'react'
import {  Carousel } from "react-bootstrap";
import './Home.css'
import caro_pic1 from "../../../assets/GirlPush.jpg"
import caro_pic2 from "../../../assets/Man_Subaling.jpg"
import caro_pic3 from "../../../assets/Girl_Dumbleing.jpg"
import caro_pic4 from "../../../assets/ManBlack.jpg"
import caro_pic5 from "../../../assets/girl.jpg"
import caro_pic6 from "../../../assets/Man.jpg"



const Caro = () => {
  return (
    <div>
      <Carousel className="p-4 m-4">
        <Carousel.Item>
          <img className="d-block w-100" src={caro_pic1} alt="First slide" />
          <Carousel.Caption>
            <h3>Exercise Daily</h3>
            <p className="caro-p">
              Exercise daily for at least an hour. You do not have to kill
              yourself from running, jogging, etc.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={caro_pic2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Understand the basics of building muscle</h3>
            <p className="caro-p">
              Talk to any personal trainer and they’ll tell you there are
              certain muscle-building basics. 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={caro_pic5} alt="Third slide" />

          <Carousel.Caption>
            <h3>Attack your lower body to burn fat</h3>
            <p className="caro-p">
              To flatten your belly, “go below your navel,” Cardiello says. 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={caro_pic6} alt="Third slide" />

          <Carousel.Caption>
            <h3>Be mindful of the little things</h3>
            <p className="caro-p">
               When you’re strength training,
              you have to “pay attention to the little things, because you’re
              only as strong as your weakest link,” Boyce says. 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Caro