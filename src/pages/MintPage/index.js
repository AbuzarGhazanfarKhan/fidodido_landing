import React from 'react'
import mintPage_rotation from "../../assets/gifs/Mint_Gif.webp"
import x_logo from "../../assets/Logo/twitter-x-logo-0339F999CF-seeklogo.com.png";
import logo from "../../assets/Logo/fido-dido-logo-white.png";
import icon1 from "../../assets/mintPageIcons/mintIcon1.png";
import opensea from "../../assets/mintPageIcons/opensea1.png";
import etherscan from "../../assets/mintPageIcons/etherscan.png";
import "./mintPage.css"
import { Connect } from '../../components/wallet/connect'


function MintPage() {
  return (
    <>
      <div className='container'>
        <div style={{ width: "50vw" }}>
          <center>
            <img style={{ height: "75px", marginBlock: "20px" }} src={logo} alt="" />
            <h2 style={{ color: "white", width: "70%", fontWeight: "light" }}> Fido Dido is a collection of <b> 7,777 nostalgic
              unique Fidos</b> stored on the blockchain, drawing
              inspiration from the vibrant <b>90s era</b>, complete
              with cool <b>commercial & gaming rights</b>
            </h2>
            <h4 style={{ color: "white", fontWeight: "lighter" }}>Private Sale</h4>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", gap: "1rem" }}>
              <div style={{ display: "flex", alignContent: "center", flexDirection: "column" }} >
                <img src={icon1} style={{ height: "185px" }} alt="" srcset="" />
                <button style={{ padding: "10px", borderRadius: "10px" }}> <b> 1 NFT</b>  </button>
              </div>
              <div style={{ display: "flex", alignContent: "center", flexDirection: "column" }}>
                <img src={icon1} style={{ height: "185px" }} alt="" srcset="" />
                <button style={{ padding: "10px", borderRadius: "10px" }}> <b> 2 NFTs</b>  </button>
              </div>
            </div>
            <div>
              <Connect />
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", height: "30px", columnGap: "1rem", marginTop: "10px" }}>
          <img src={opensea} alt="X Logo" />
          <img src={etherscan} alt="X Logo" />

        </div>
      </center>

    </div >


      <div style={{ background: "white", height: "100vh", width: "50vw" }}>
        <center> <h1> 0099/7777</h1></center>
        <center><img style={{ borderRadius: "10px" }} src={mintPage_rotation} width={"75%"} alt="mintPage_rotation gif" /> </center>
        <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", height: "30px", columnGap: "1rem", marginTop: "10px" }}>
          <img src={x_logo} alt="X Logo" />
          <img src={x_logo} alt="X Logo" />
          <img src={x_logo} alt="X Logo" />
        </div>


      </div>
    </div >
    </>
  )
}

export default MintPage


// display: flex;
// flex-direction: row;
// place-content: center;
// height: 30px;
// column-gap: 1rem;