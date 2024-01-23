// src/App.js
import React from "react";
import ImageGrid from "./components/ImageGrid";
import images from "./images"; // Import your updated images array
import Foorter from "./components/Footer";
import Hamburger from "./components/Hamburger";
import logo from "./assets/Logo/fido-dido-logo.png";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import { Router } from "./Router";
function App() {

  return (
    <Router/>
    
  );
}

export default App;
