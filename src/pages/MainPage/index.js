import React from "react";
import ImageGrid from "../../components/ImageGrid";
import Foorter from "../../components/Footer";
import Hamburger from "../../components/Hamburger";
import logo from "../../assets/Logo/fido-dido-logo.png";
import { useMediaQuery } from "react-responsive";
import "./mainPage.css";
function MainPage() {

    const isMobile = useMediaQuery({ query: "(max-width:600px)" });
    const isTablet = useMediaQuery({ minWidth:"601px",maxWidth:"821px" });
    const importAllImages = (r) => r.keys().map(r);
  
    const images = importAllImages(
      require.context("../../assets/images", false, /\.(png|jpe?g|svg|gif)$/)
    );
    const mobileImages = importAllImages(
      require.context("../../assets/gifs", false, /\.(png|jpe?g|svg|gif)$/)
    );
  return (
    <div className="App">
      {isMobile && (
        <>
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
          <img className="logoMob" width={"190px"} src={logo} alt="Logo" />{" "}
        </div>
       
       <center> <h1 style={{fontSize:"20px",marginTop:"22px"}}>
       ENTER MOON PHASE: 7777 COOL FIDOS
      </h1>
      </center>
      </>
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
    

      <center>
        {" "}
        <ImageGrid images={images} mobileImages={mobileImages} />
      </center>
      <br />
      <Foorter />
    </div>
  )
}

export default MainPage