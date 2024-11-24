import "./index.css";

import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import './App.css';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import SegmentExpertise from './pages/SegmentExpertise';
import OurProducts from './pages/OurProducts';
import OurOffering from './pages/OurOffering';
import VisionMission from './pages/vision_mission';
import Line from "./components/Line"
import Services from "./pages/Services"


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <VisionMission />
      <OurOffering />
      <SegmentExpertise />
      <OurProducts />
      <Services />
      <ContactPage />
    </div>
  );
};

export default App;
