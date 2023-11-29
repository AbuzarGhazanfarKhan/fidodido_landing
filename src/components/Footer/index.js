import React from "react";
import logo from "../../assets/Logo/fido-dido-logo.png";
import Button from "react-bootstrap/Button";
import x_logo from "../../assets/Logo/twitter-x-logo-0339F999CF-seeklogo.com.png"
import "./Footer.css"
function Foorter() {
  return (
    <>
    <center>  <div className="footer">
        <div>
          <img style={{width:"200px"}} src={logo} alt="Logo" />{" "}
        </div>
        <div style={{marginInline:"100px"}}>
          {" "}
          <h2>777 HAND-DRAWN <br /> GENESIS CARDS</h2>{" "}
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:"49px",marginInline:"28px"}}>
          <div>
            {" "}
            <Button style={{backgroundColor:"rgb(23, 152, 23)",color:"white"}}> START JOURNEY </Button>{" "}
          </div>
          <div>
            {" "}
            <Button> JOIN THE CLUB </Button>{" "}
          </div>
          <div>
            {" "}
            <Button> FAQs </Button>{" "}
          </div>
        </div>

          <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
            <div><img src={x_logo}  style={{width:"20px",opacity:"0"}} alt="x_logo" /></div>
            <div><img src={x_logo} style={{width:"20px"}}  alt="x_logo" /></div>
            <div><img src={x_logo}  style={{width:"20px",opacity:"0"}} alt="x_logo" /></div>
          </div>
      </div>
      </center>
    </>
  );
}

export default Foorter;
