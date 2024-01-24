// src/App.js
import React,{useEffect} from "react";
import ImageGrid from "./components/ImageGrid";
import images from "./images"; // Import your updated images array
import Foorter from "./components/Footer";
import Hamburger from "./components/Hamburger";
import logo from "./assets/Logo/fido-dido-logo.png";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import { Router } from "./Router";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = ''; // Reset to default color
    }

    return () => {
      document.body.style.backgroundColor = ''; // Reset to default color
    };
 }, [location]);
  return (
    <Router/>
    
  );
}

export default App;
