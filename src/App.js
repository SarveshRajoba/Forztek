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
<<<<<<< HEAD
import VisionMission from "./pages/vision_mission";
=======
import Line from "./components/Line"

>>>>>>> 24e6eca5b84e726fe19864809f4acddea8cfcf90

const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <Home />
=======
      <Navbar/>
      <Home/>
      <Line/>
>>>>>>> 24e6eca5b84e726fe19864809f4acddea8cfcf90
      <AboutUs />
      <VisionMission />
      <OurOffering />
      <SegmentExpertise />
      <OurProducts />
      <ContactPage />
    </div>
  );
};

export default App;
