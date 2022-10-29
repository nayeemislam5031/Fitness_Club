import './App.css'
import Navigatin from './Component/Navbar/Navigatin';
import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from './Component/Pages/About/About';
import WBF from './Component/Pages/WBF/WBF';
import Programs from './Component/Pages/Program/Programs';
import Stories from './Component/Pages/Stories/Stories';

import Home from './Component/Pages/Home/Home';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigatin></Navigatin>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wbfway" element={<WBF />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
