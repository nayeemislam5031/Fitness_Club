
import Navigatin from './Component/Navbar/Navigatin';

import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,Routes } from "react-router-dom";

import About from './Component/Pages/About';
import WBF from './Component/Pages/WBF';
import Programs from './Component/Pages/Programs';
import Stories from './Component/Pages/Stories';
import Contact from './Component/Pages/Contact';
import Home from './Component/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navigatin></Navigatin>

      <div>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/wbfway" element={<WBF />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
