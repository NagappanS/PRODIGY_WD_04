import React from "react";
import Home from './Homepag';
import About from "./About";
import Edu from './Edu';
import Pro from './Pro';
import Cont from './Cont';
import { Routes , Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Edu" element={<Edu/>}/>
      <Route path="/Pro" element={<Pro/>}/>
      <Route path="/Cont" element={<Cont/>}/>
    </Routes>
  );
}

export default App;
