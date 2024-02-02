import React,{useState} from "react";
import logo from "../../assets/Logo/fido-dido-logo.png";
import Button from "react-bootstrap/Button";
import x_logo from "../../assets/Logo/twitter-x-logo-0339F999CF-seeklogo.com.png";
import discord_logo from "../../assets/Logo/black-discord-icon-27.jpg";
import "./Footer.css";
import { Grid, Paper} from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import waitlist from '@zootools/waitlist-js'
import opensea from "../../assets/Logo/opensea-logo.svg"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


import Countdown from "../Countdown"
function Foorter() {
  // const [isExpired, setIsExpired] = useState(false);
  
  // const renderer = ({  hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     setIsExpired(true);
  //     return <> Phase II 
// Cooking </>;
  //   } else {
  //     return <>{hours}  : {minutes}  : {seconds} </>;
  //   }
  // };

  const isMobile = useMediaQuery({query:'(max-width:600px)'});
  const clickPopup = (event) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("EI7h0QshP1hLQy11sdy4")
  }
  const isTablet = useMediaQuery({ query: "(max-width:821px)" });
  let navigate = useNavigate();
  return (
    <>
    
    {!isMobile  && <center>
        {" "}
        <div className="footer">
          <div>
            <img className="logo" src={logo} alt="Logo" />{" "}
          </div>
          <div className="text" >
            {" "}
            <h2>
            ENTER MOON PHASE II: 7777 <br /> COOL FIDOS
            </h2>{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: isTablet?"9px": "49px",
              marginInline:isTablet?"9px": "28px",
            }}
          >
            <div>
              {" "}
             <a > <Button onClick={()=> navigate('/mint')} className=" rotate-button journey"
                style={{ backgroundColor: "rgb(23, 152, 23)", color: "white",cursor:"pointer" }}
                
              >
                {" "}
                {/* <Countdown date={new Date('2023-12-07T19:00:00')} renderer={renderer({daysInHours})} />{" "} */}
             <Countdown/>
              </Button>{" "}
              </a>
            </div>
            <div>
              {" "}
              <a  href="https://discord.com/invite/f3xTsPnsqN"   target="_blank">   <Button >
                {" "}
                <span>JOIN THE CLUB</span>{" "}
              </Button>{" "} </a>
            </div>
            <div>
              {" "}
              <a
                href="https://mirror.xyz/0xbeb122E9f83cd44099D51c77a312AcF2357Ac5e0/MXtr_zP0GX-l94OZRQQ5J-E-_Ua7foYwaX-oyCB97tU"
                target="_blank"
              >
                {" "}
                <Button>  FAQs </Button>{" "}
              </a>
            </div>
          </div>
          <div style={{marginLeft: "15px"}}>
              {" "}
              <Button  onClick={()=>navigate("/walletChecker")}>
                {" "}
                <span>Wallet Checker</span>{" "}
              </Button>{" "}
            </div>
        
        </div>
        <hr />
        <div className="terms">
          <p>
           <b> TERMS OF USE</b>
          </p>
          <p>
          <b>  IP RIGHTS</b>
          </p>
                 <div style={{ display: "flex", flexDirection: "row", gap: "7px",alignItems:"center" }}>
            <div>
              <a href="https://opensea.io/collection/fido-dido-genesis-cards?tab=items" target="_blank">
              <img
                src={opensea}
                className="icon"
                style={{ width: "38px" }}
                alt="x_logo"
              />
              </a>
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
            <a
                href="https://discord.gg/f3xTsPnsqN"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img
                src={discord_logo}
                className="icon"
                style={{ width: "38px"}}
                alt="discord_logo"
              />
              </a>
            </div>
          </div>
          </div>
 
      </center>}



    </>
  );
}

export default Foorter;