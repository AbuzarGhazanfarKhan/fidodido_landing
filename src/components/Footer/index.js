import React from "react";
import logo from "../../assets/Logo/fido-dido-logo.png";
import Button from "react-bootstrap/Button";
import x_logo from "../../assets/Logo/twitter-x-logo-0339F999CF-seeklogo.com.png";
import "./Footer.css";

import waitlist from '@zootools/waitlist-js'


function Foorter() {

  const clickPopup = (event) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("EI7h0QshP1hLQy11sdy4")
  }


  return (
    <>
      <center>
        {" "}
        <div className="footer">
          <div>
            <img style={{ width: "200px" }} src={logo} alt="Logo" />{" "}
          </div>
          <div style={{ marginInline: "100px" }}>
            {" "}
            <h2>
              777 HAND-DRAWN <br /> GENESIS CARDS
            </h2>{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "49px",
              marginInline: "28px",
            }}
          >
            <div>
              {" "}
              <Button
                style={{ backgroundColor: "rgb(23, 152, 23)", color: "white" }}
              >
                {" "}
                START JOURNEY{" "}
              </Button>{" "}
            </div>
            <div>
              {" "}
              <Button onClick={clickPopup}>
                {" "}
                <span>JOIN THE CLUB</span>{" "}
              </Button>{" "}
            </div>
            <div>
              {" "}
              <a
                href="https://mirror.xyz/0xbeb122E9f83cd44099D51c77a312AcF2357Ac5e0/9c8Z2FmlcM3Jey1LpSVbQliQJ6Q73_L8JzdIXyJOLyQ"
                target="_blank"
              >
                {" "}
                <Button> <span className="scale"> FAQs </span> </Button>{" "}
              </a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <div>
              <img
                src={x_logo}
                className="icon"
                style={{ width: "38px", opacity: "0" }}
                alt="x_logo"
              />
            </div>
            <div>
              {" "}
              <a
                href="https://twitter.com/0xfidodido"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src={x_logo}
                  className="icon"
                  style={{ width: "38px" }}
                  alt="x_logo"
                />
              </a>{" "}
            </div>
            <div>
              <img
                src={x_logo}
                className="icon"
                style={{ width: "38px", opacity: "0" }}
                alt="x_logo"
              />
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Foorter;
