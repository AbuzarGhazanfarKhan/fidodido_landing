// src/App.js
import React,{useEffect} from "react";
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
