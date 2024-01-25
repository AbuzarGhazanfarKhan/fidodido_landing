import React, { useState } from 'react';
import { Drawer, List, IconButton } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/Logo/fido-dido-logo.png";
import x_logo from "../../assets/Logo/twitter-x-logo-0339F999CF-seeklogo.com.png";
import discord_logo from "../../assets/Logo/discord-mark-black.png";
import waitlist from '@zootools/waitlist-js'
import { AiOutlineClose } from "react-icons/ai";
import opensea from "../../assets/Logo/Opensea NFT Marketplace.png"



const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickPopup = (event) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("EI7h0QshP1hLQy11sdy4")
  }
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton onClick={toggleDrawer(false)} style={{ color: 'white',justifyContent:"start" }}>
        <AiOutlineClose />
      </IconButton>
      <List>
      <div>
         <center>   <img width={"120px"} src={logo} alt="Logo" />{" "} </center>
          </div>
          <div >
            {" "}
            <h2 style={{marginInline:"6px"}}>
           <center>   777 HAND-DRAWN <br /> GENESIS CARDS </center>
            </h2>{" "}
          </div>
   
          <div
            style={{
              display: "flex",
             flexDirection: "column",
             alignItems:"center",
             marginBlock:"30px"
            //   gap: "49px",
            //   marginInline: "28px",
            }}
          >
            <div>
              {" "}
              <div 
                style={{width:"100%",marginBottom:"5px",color:"white"}} 
                 
              >
                {" "}
                Phase II 
Cooking{" "}
              </div>{" "}
            </div>
            <div>
              {" "}
              <div style={{width:"100%",marginBottom:"5px",color:"white"}} onClick={clickPopup}>
                {" "}
                JOIN THE CLUB{" "}
              </div>{" "}
            </div>
            <div>
              {" "}
              <a
                href="https://mirror.xyz/0xbeb122E9f83cd44099D51c77a312AcF2357Ac5e0/9c8Z2FmlcM3Jey1LpSVbQliQJ6Q73_L8JzdIXyJOLyQ"
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:"none"}}
              >
                {" "}
                <div style={{width:"100%",marginBottom:"5px",color:"white",textDecoration:"none"}} >  FAQs </div>
              </a>
            </div>
          </div>
          <center> <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
            
            <div style={{display:"flex",justifyContent:"center"}}>
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
                  style={{ width: "28px" }}
                  alt="x_logo"
                /> 
              </a>{" "} 
            </div>
            <div>
            <a href="https://opensea.io/collection/fido-dido-genesis-cards?tab=items" target="_blank" rel="noopener noreferrer">
              <img
                src={opensea}
                className="icon"
                style={{ width: "30px" }}
                alt="x_logo"
              />
              </a>
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
          </center>
      </List>
    </div>
  );

  return (
    <div >
      <IconButton style={{minWidth:"96px"}} edge="start"  aria-label="menu" onClick={toggleDrawer(true)}>
        <IoMenu />
      </IconButton>
      <Drawer 
        anchor="left" 
        open={isOpen} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: { height: '50vh', backgroundColor: '#009016',marginLeft:"20px",marginTop:"40px" }
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
