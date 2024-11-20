import "./index.css";

import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";


const App = () => {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Home/>
    </div>
  );
};

export default App;
