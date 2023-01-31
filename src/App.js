import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import Home from "./Pages/Home";

import "./App.css";
import Just from "./Pages/Just";
import YouTube from "./Pages/YouTube";
import Give from "./Pages/Give";

const App = () => (
  <>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/justfm" element={<Just />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/give" element={<Give />} />
      </Routes>
      <Footer />
    </div>
  </>
);

export default App;
