// src/App.js
import React from "react";
import ImageGrid from "./components/ImageGrid";
import images from "./images"; // Import your updated images array
import Foorter from "./components/Footer";
import Hamburger from "./components/Hamburger";
import logo from "./assets/Logo/fido-dido-logo.png";
import { useMediaQuery } from "react-responsive";
import "./App.css";
function App() {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });
  const isTablet = useMediaQuery({ query: "(max-width:821px)" });
  const importAllImages = (r) => r.keys().map(r);

  const images = importAllImages(
    require.context("./assets/images", false, /\.(png|jpe?g|svg|gif)$/)
  );
  const mobileImages = importAllImages(
    require.context("./assets/gifs", false, /\.(png|jpe?g|svg|gif)$/)
  );
  return (
    <div className="App">
      {isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop:"15px"
          }}
        >
          {" "}
          <Hamburger />{" "}
          <img className="logoMob" width={"200px"} src={logo} alt="Logo" />{" "}
        </div>
      )}
      {isTablet && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop:"15px"
          }}
        >
          {" "}
          <Hamburger />{" "}
          <img className="logoTab" width={"200px"} src={logo} alt="Logo" />{" "}
        </div>
      )}
      <br />
      <br />

      <center>
        {" "}
        <ImageGrid images={images} mobileImages={mobileImages} />
      </center>
      <br />
      <Foorter />
    </div>
  );
}

export default App;
