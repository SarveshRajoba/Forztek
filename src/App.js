import "./index.css";

import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import './App.css';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import SegmentExpertise from './SegmentExpertise';
import OurProducts from './pages/OurProducts';
import OurOffering from './pages/OurOffering';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutUs />
      <OurOffering/>
      <SegmentExpertise />
      <OurProducts/>
      <ContactPage />
    </div>
  );
};

export default App;
