import React, { useState } from 'react'
import mintPage_rotation from "../../assets/mintPageIcons/mintPage_rotation.gif"
import React from 'react'
import mintPage_rotation from "../../assets/gifs/Mint_Gif.webp"
import x_logo from "../../assets/Logo/twitter-x-logo-0339F999CF-seeklogo.com.png";
import logo from "../../assets/Logo/fido-dido-logo-white.png";
import icon1 from "../../assets/mintPageIcons/mintIcon1.png";
import opensea from "../../assets/mintPageIcons/opensea1.png";
import etherscan from "../../assets/mintPageIcons/etherscan.png";
import "./mintPage.css"
import { Connect } from '../../components/wallet/connect'
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import abi from '../../abi/721.json'
import { ethers } from "ethers"
function MintPage() {
  const [activeButton, setActiveButton] = useState('1');
  const { isConnected, address } = useAccount();
  
  const handleButtonClick = (value) => {
    setActiveButton(value);
  };
  const price = ethers.parseEther("4");
  const { config, error } = usePrepareContractWrite({
    address: '0x287a2403F649D16C08170068dD881e60A65BB9b8',
    abi,
    functionName: 'safeMint',
    args: [2, "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", ["0x04a10bfd00977f54cc3450c9b25c9b3a502a089eba0097ba35fc33c4ea5fcb54", "0x9d997719c0a5b5f6db9b8ac69a988be57cf324cb9fffd51dc2c37544bb520d65", "0x0befebd5f6f5e8b5f7ec6935245efbd76ce396aedac1b12781a64df01b75aab7"]], // mint 1 NFT
    value: price,
  });


  const { data, isLoading, error: writeError, write } = useContractWrite(config);

  const Mint = async () => {
    if (error) {

      if (error.message.includes("Mint limit reached")) {
        alert("Your Mint limit has been reached. Please try again later");
      } else if (error.details && (error.details).startsWith("err: insufficient funds for gas * price ")) {
        alert("Your Wallet has insufficient funds")
      } if (error.message.includes("Total supply limit reached during private phase")) {
        alert("Total supply limit reached during private phase")
      } if (error.message.includes("Max supply reached")) {
        alert("Minting has been completed")
      } if (error.message.includes("Invalid merkle proof")) {
        alert("your Wallet is not in the whitelist. You can mint in the public phase")
      } else if (error.message.includes("Wrong Ether value")) {
        alert("You are sending insufficient funds to the contract")
      } else {
        console.log("An error occurred: ", error.message);
      }

    } else {
      write?.()
    }


  }

  return (
    <>
      <div className='container'>
        <div className='fidoLeft'>
          <center> <img style={{ height: "75px", marginBlock: "20px" }} src={logo} alt="" />
            <h2 style={{ color: "white", width: "70%", fontWeight: "light" }}> Fido Dido is a collection of <b> 7,777 nostalgic
              unique Fidos</b> stored on the blockchain, drawing
              inspiration from the vibrant <b>90s era</b>, complete
              with cool <b>commercial & gaming rights</b>
            </h2>
            <h4 style={{ color: "white", fontWeight: "lighter" }}>Private Sale</h4>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
                <img src={icon1} className='fidoIcon' alt="" srcset="" />
                <button style={{ minWidth: "180px" }} className={activeButton === '1' ? 'active' : 'notActive'} onClick={() => handleButtonClick('1')}> <b> 1 NFT</b>  </button>
              </div>
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <img src={icon1} className='fidoIcon' alt="" srcset="" />
                <button style={{ minWidth: "180px" }} className={activeButton === '2' ? 'active' : 'notActive'} onClick={() => handleButtonClick('2')}> <b> 2 NFTs</b>  </button>
              </div>



            </div>
            <div>
              {" "}
              <a > <Button className="journey"
                style={{ backgroundColor: "rgb(23, 152, 23)", color: "white", cursor: "pointer", width: "385px", padding: "10px", borderRadius: "10px", marginBlock: "25px" }}

              >
                {" "}
                {/* <Countdown date={new Date('2023-12-07T19:00:00')} renderer={renderer({daysInHours})} />{" "} */}
                Mint
              </Button>{" "}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", height: "30px", columnGap: "1rem", marginTop: "10px" }}>
              <img src={opensea} alt="X Logo" />
              <img src={etherscan} alt="X Logo" />

            </div>
          </center>

        </div>


        <div className='fidoRight' >
          <center> <h1> 0099/7777</h1></center>
          <center><img style={{ borderRadius: "10px" }} src={mintPage_rotation} width={"65%"} alt="mintPage_rotation gif" /> </center>
          <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", height: "30px", columnGap: "1rem", marginTop: "10px" }}>
            <img src={x_logo} alt="X Logo" />
            <img src={x_logo} alt="X Logo" />
            <img src={x_logo} alt="X Logo" />
          </div>


        </div>
      </div>
    </>
  )
}

export default MintPage


// display: flex;
// flex-direction: row;
// place-content: center;
// height: 30px;
// column-gap: 1rem;