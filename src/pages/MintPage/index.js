import React, { useState, useEffect } from "react";
import mintPage_rotation from "../../assets/mintPageIcons/mintPage_rotation.gif";
import x_logo from "../../assets/Logo/twitter-x-logo-0339F999CF-seeklogo.com.png";
import logo from "../../assets/Logo/fido-dido-logo-white.png";
import opensea1 from "../../assets/Logo/opensea-logo.svg";
import discord from "../../assets/Logo/black-discord-icon-27.jpg";
import icon1 from "../../assets/mintPageIcons/mintIcon1.png";
import icon2 from "../../assets/mintPageIcons/mintIcon2.png";
import opensea from "../../assets/mintPageIcons/opensea1.png";
import etherscan from "../../assets/mintPageIcons/etherscan.png";
import "./mintPage.css";
import { Connect } from "../../components/wallet/connect";
import {
  useContractWrite,
  useContractRead,
  usePrepareContractWrite,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";
import abi from "../../abi/erc721.json";
import { ethers } from "ethers";
import Button from "react-bootstrap/Button";
import axios from "axios";

// import { useReadContract } from 'wagmi'

function MintPage() {
  const [no_of_NFTs, set_no_of_NFTs] = useState(1);
  const [PrivatePhase, setPrivatePhase] = useState(true);
  const [TotalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState("");
  const [hash, setHash] = useState("");
  const [proof, setProof] = useState([]);
  const [showModal, setShowsModal] = useState(false);
  const { isConnected, address } = useAccount();

  const handleButtonClick = (value) => {
    set_no_of_NFTs(value);
  };
  const {
    data: phase,
    isError: phaseError,
    isLoading: phaseLoading,
  } = useContractRead({
    address: "0x5E8AC1f633915372282672a40962E74afC4CF4D1",
    abi,
    functionName: "getIsPrivatePhase",
    args: [],
    watch: true, // optional
  });
  const {
    data: supply,
    isError: supplyError,
    isLoading: supplyLoading,
  } = useContractRead({
    address: "0x5E8AC1f633915372282672a40962E74afC4CF4D1",
    abi,
    functionName: "totalSupply",
    args: [],
    watch: true, // optional
  });
  const { config, error } = usePrepareContractWrite({
    address: "0x5E8AC1f633915372282672a40962E74afC4CF4D1",
    abi,
    functionName: "safeMint",
    args: [no_of_NFTs, address, proof],
    value: price,
  });

  const txHash = config?.data;

  // // Use the useWaitForTransactionReceipt hook to wait for the transaction receipt
  // const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
  //  hash: txHash,
  // });

  const fetchWalletStatus = async () => {
    try {
      const response = await axios.get(
        `https://qr-code-api.oasisx.world/check-wallet/${address}`
      );
      if (response.data.status === "Success") {
        setProof(response.data.data.proof);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Error fetching wallet status: ${error}`);
    }
  };

  useEffect(() => {
    setPrivatePhase(phase);
    setTotalSupply(supply);
    console.log(supply);
    console.log(phase);
    console.log(supplyLoading);
    if (PrivatePhase) {
      if (fetchWalletStatus()) {
        setPrice(ethers.parseEther((0.03 * no_of_NFTs).toString()));
      }
    } else {
      setPrice(ethers.parseEther((0.04 * no_of_NFTs).toString()));
    }
  }, [useContractRead, usePrepareContractWrite, no_of_NFTs, address]);

  useEffect(() => {
    console.log(supply);
    console.log(phase);
  }, [supply, phase]);
  useEffect(() => {
    console.log(config?.data);
  }, [config?.data]);

  const {
    data: MintData,
    isLoading: MintLoading,
    write,
  } = useContractWrite(config);

  console.log("-----------------------------------", address);
  const Mint = async () => {
    if (error) {
      if (error.message.includes("Mint limit reached")) {
        alert("Your Mint limit has been reached. Please try again later");
      } else if (
        error.details &&
        error.details.startsWith("err: insufficient funds for gas * price ")
      ) {
        alert("Your Wallet has insufficient funds");
      }
      if (
        error.message.includes(
          "Total supply limit reached during private phase"
        )
      ) {
        alert("Total supply limit reached during private phase");
      }
      if (error.message.includes("Max supply reached")) {
        alert("Minting has been completed");
      }
      if (error.message.includes("Invalid merkle proof")) {
        alert(
          "your Wallet is not in the whitelist. You can mint in the public phase"
        );
      } else if (error.message.includes("Wrong Ether value")) {
        alert("You are sending insufficient funds to the contract");
      } else {
        console.log("An error occurred: ", error.message);
      }
    } else {
      const txHash = await write();
      setHash(txHash);
      console.log("Transaction hash: ", txHash);
    }
    console.log(hash);
  };

  return (
    <>
      <div className="container">
        <div className="fidoLeft">
          <center>
            {" "}
            <img
            className="fidoLogo"
              style={{}}
              src={logo}
              alt=""
            />
            <h3 style={{ color: "white",  fontWeight: "light" }}>
              {" "}
              FIDO DIDO IS A COLLECTION OF <b>
                {" "}
                7,777 NOSTALGIC UNIQUE FIDOS
              </b>{" "}
              STORED ON THE BLOCKCHAIN, DRAWING INSPIRATION FROM THE VIBRANT{" "}
              <b>90S ERA</b>, COMPLETE WITH COOL{" "}
              <b>COMMERCIAL & GAMING RIGHTS</b>
            </h3>
            <h4 style={{ color: "white", fontWeight: "lighter" }}>{`${
              PrivatePhase ? "Private Sale" : `Public Sale`
            } `}</h4>

            <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={icon2} className="fidoIcon" alt="" srcset="" />
                <button
                  className={
                    no_of_NFTs.toString() === "1" ? "active" : "notActive"
                  }
                  onClick={() => handleButtonClick(1)}
                >
                  {" "}
                  <b> 1 NFT</b>{" "}
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={icon1} className="fidoIcon" alt="" srcset="" />
                <button
                  className={
                    no_of_NFTs.toString() === "2" ? "active" : "notActive"
                  }
                  onClick={() => handleButtonClick(2)}
                >
                  {" "}
                  <b> 2 NFTs</b>{" "}
                </button>
              </div>
            </div>

            <div>
              {!isConnected ? (
                <Connect />
              ) : (
                <a>
                  <Button
                    className="journey"
                    style={{
                      backgroundColor: "rgb(23, 152, 23)",
                      color: "white",
                      cursor: "pointer",
                      
                      borderRadius: "10px",
                      marginBlock: "25px",
                    }}
                    onClick={Mint}
                  >
                    {" "}
                    {/* <Countdown date={new Date('2023-12-07T19:00:00')} renderer={renderer({daysInHours})} />{" "} */}
                    Mint
                  </Button>{" "}
                </a>
              )}
            </div>
            </div>
            <div
            className="mintIcons"
              style={{
               
              }}
            >
              <img src={opensea} alt="X Logo" />
              <img src={etherscan} alt="X Logo" />
            </div>
          </center>
        </div>

        <div className="fidoRight">
          <center>
            {" "}
            <h1 style={{letterSpacing:"2px",fontSize:"35px"}}> {supply?.toString()}/7777</h1>
          </center>
          <center>
            <img
              src={mintPage_rotation}
              width={"70%"}
              alt="mintPage_rotation gif"
            />{" "}
          </center>
          <div
          className="socialIcons"
            style={{
             
            }}
          >
              <a href="https://opensea.io/collection/fido-dido-genesis-cards?tab=items" target="_blank">
           <img  src={opensea1} alt="X Logo" /></a>
           <a  href="https://x.com/0xfidodido"
                target="_blank"
                rel="noopener noreferrer"> <img src={x_logo} alt="X Logo" /></a>
           <a  href="https://discord.gg/f3xTsPnsqN"
                target="_blank"
                rel="noopener noreferrer"> <img src={discord} alt="X Logo" /></a>
          </div>
        </div>
        {showModal ? (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => {setShowsModal(false)}}>X</span>
              <div className='modalSection'>
              
                <div className="right-section">
                  <p> MINT IN PROGRESS PLEASE VIEW YOUR TRANSACTION HERE:</p>
                    <a className="transaction" style={{color:"#009016", textDecoration:"none"}} href={`https://sepolia.etherscan.io/tx/${MintData?.hash}` }> {MintData?.hash}</a>
                </div>
              </div>
            </div>
          </div>
 ):null}
      </div>

      
    </>
  );
  
}

export default MintPage;
