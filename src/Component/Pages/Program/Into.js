import React from 'react'
import {  } from 'react-bootstrap';
import './Progrm.css'
import Tada from "react-reveal/Tada";

const Into = () => {
  return (
    <div className="m-4 p-4"  >
      <Tada>
        <h1 className="title mb-4"><strong>Our Programs</strong> </h1>
      </Tada>
      
      <section >
        <p>
          Our Semi-Private and Private Training programs combine Coached Days
          and Independent Days for a comprehensive fitness program. This is how
          it works:
        </p>
        <br />
        <p align="left">
          
          <li>
            Trainer Days - Two to four days per week (depending on your plan)
            you will be doing individualized work with your trainer.
          </li>
          <li>
            Independent Days – Members have unlimited access to the gym during
            opening hours for independent work. Most members choose to use these
            sessions to accelerate their cardio conditioning. Your trainer can
            prescribe an individualized program and training staff are always
            on-site to answer questions or provide guidance.
          </li>
        </p>
      </section>
    </div>
  );
}

export default Into