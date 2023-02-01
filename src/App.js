import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Footer
} from "./containers";
import { Navbar } from "./components";
import Home from "./Pages/Home";

import "./App.css";
import Just from "./Pages/Just";
import YouTube from "./Pages/YouTube";
import Give from "./Pages/Give";
import NewsUpdates from "./Pages/NewsUpdates";

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
        <Route path="/news" element={<NewsUpdates />} />
        <Route path="/give" element={<Give />} />
      </Routes>
      <Footer />
    </div>
  </>
);

export default App;
