import React, { useState, useEffect } from 'react'
import mintPage_rotation from "../../assets/mintPageIcons/mintPage_rotation.gif"
import x_logo from "../../assets/Logo/twitter-x-logo-0339F999CF-seeklogo.com.png";
import logo from "../../assets/Logo/fido-dido-logo-white.png";
import icon1 from "../../assets/mintPageIcons/mintIcon1.png";
import opensea from "../../assets/mintPageIcons/opensea1.png";
import etherscan from "../../assets/mintPageIcons/etherscan.png";
import "./mintPage.css"
import { Connect } from '../../components/wallet/connect'
import { useContractWrite, useContractRead, usePrepareContractWrite, useAccount } from 'wagmi'
import abi from '../../abi/erc721.json'
import { ethers } from "ethers"
import Button from "react-bootstrap/Button";
import axios from 'axios';
// import { useReadContract } from 'wagmi'


function MintPage() {
  const [no_of_NFTs, set_no_of_NFTs] = useState(1);
  const [PrivatePhase, setPrivatePhase] = useState(true);
  const [TotalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState("")
  const [proof, setProof] = useState([])

  const { isConnected, address } = useAccount();

  const handleButtonClick = (value) => {
    set_no_of_NFTs(value);
  };
  const { data: phase, isError: phaseError, isLoading: phaseLoading } = useContractRead({
    address: '0x7d0680a4611993cFc289DDFD714556A959226a91',
    abi,
    functionName: '_isPrivatePhase',
    args: [],
    watch: true, // optional
  });
  const { data: supply, isError: supplyError, isLoading: supplyLoading } = useContractRead({
    address: '0x7d0680a4611993cFc289DDFD714556A959226a91',
    abi,
    functionName: 'totalSupply',
    args: [],
    watch: true, // optional
  });
  const { config, error } = usePrepareContractWrite({
    address: '0x7d0680a4611993cFc289DDFD714556A959226a91',
    abi,
    functionName: 'safeMint',
    args: [no_of_NFTs, address, proof],
    value: price,
  });




  
  const fetchWalletStatus = async () => {
    try {
      const response = await axios.get(`https://qr-code-api.oasisx.world/check-wallet/${address}`);
      if (response.data.status === "Success") {
        setProof(response.data.data.proof)
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error(`Error fetching wallet status: ${error}`);
    }
  };

  useEffect(() => {
setPrivatePhase(phase)
setTotalSupply(supply)
console.log(supply);
console.log(phase);
console.log(supplyError);
    if (PrivatePhase) {
      if (fetchWalletStatus()) {
        setPrice(ethers.parseEther((0.03 * no_of_NFTs).toString()));
      }
    } else {
      setPrice(ethers.parseEther((0.04 * no_of_NFTs).toString()));
    }
  }, [useContractRead, usePrepareContractWrite, no_of_NFTs, address])

  const { data: MintData, isLoading: MintLoading, write } = useContractWrite(config);

  
  console.log("-----------------------------------",address)
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
      write()
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
            <h4 style={{ color: "white", fontWeight: "lighter" }}>{`${PrivatePhase ?"Private Sale": "Public Sale"} `}</h4>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
                <img src={icon1} className='fidoIcon' alt="" srcset="" />
                <button  className={no_of_NFTs.toString() === '1' ? 'active' : 'notActive'} onClick={() => handleButtonClick(1)}> <b> 1 NFT</b>  </button>
              </div>
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <img src={icon1} className='fidoIcon' alt="" srcset="" />
                <button  className={no_of_NFTs.toString() === '2' ? 'active' : 'notActive'} onClick={() => handleButtonClick(2)}> <b> 2 NFTs</b>  </button>
              </div>

            </div>
            <div>
              {
                !isConnected ? <Connect /> :
                  <a >
                    <Button className="journey"
                      style={{ backgroundColor: "rgb(23, 152, 23)", color: "white", cursor: "pointer", padding: "10px", borderRadius: "10px", marginBlock: "25px" }}
                      onClick={Mint}
                    >
                      {" "}
                      {/* <Countdown date={new Date('2023-12-07T19:00:00')} renderer={renderer({daysInHours})} />{" "} */}
                      Mint
                    </Button>{" "}
                  </a>
              }

            </div>
            <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", height: "30px", columnGap: "1rem", marginTop: "10px" }}>
              <img src={opensea} alt="X Logo" />
              <img src={etherscan} alt="X Logo" />

            </div>
          </center>

        </div>


        <div className='fidoRight' >
          <center> <h1> {supply?.toString()}/7777</h1></center>
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