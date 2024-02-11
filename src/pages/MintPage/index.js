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
  useAccount,
  useWaitForTransaction,

} from "wagmi";

import abi from "../../abi/erc721.json";
import { ethers } from "ethers";
import Button from "react-bootstrap/Button";
import axios from "axios";
import loader from "../../assets/loader/loader.gif";


function MintPage() {
  const [no_of_NFTs, set_no_of_NFTs] = useState(1);
  const [PrivatePhase, setPrivatePhase] = useState("");
  const [TotalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState("");
  const [hash, setHash] = useState("");
  const [proof, setProof] = useState([]);
  const [showModal, setShowsModal] = useState(false);
  const [contractAddress, setContractAddress] = useState(false);
  const { isConnected, address } = useAccount();
  const [reload, setReload] = useState(false);

  const handleButtonClick = (value) => {
    set_no_of_NFTs(value);
  };
// const client = new Client({
//   providerUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID", // Replace with your Infura project ID
// });
  const {
    data: phase,
    isError: phaseError,
    isLoading: phaseLoading,
    refetch: phaseRefetch,
  } = useContractRead({
    address: contractAddress,
    abi,
    functionName: "getIsPrivatePhase",
    args: [],
    watch: true,
  });
  const {
    data: pause,
    isError: pauseError,
    isLoading: pauseLoading,
    refetch: pauseRefetch,
  } = useContractRead({
    address: contractAddress,
    abi,
    functionName: "_pause",
    args: [],
    watch: true,
  });

  const {
    data: supply,
    isError: supplyError,
    isLoading: supplyLoading,
    refetch: SupplyRefetch,
    status:MintStatus
  } = useContractRead({
    address: contractAddress,
    abi,
    functionName: "totalSupply",
    args: [],
    watch: true,
     // optional
  });

  const { config, error, refetch } = usePrepareContractWrite({
    address: contractAddress,
    abi,
    functionName: "safeMint",
    args: [no_of_NFTs, address, proof],
    value: price,
  });



  useEffect(() => {
    // console.log("1", contractAddress);
    refetch();
  }, [showModal, no_of_NFTs, address, reload, phase]);

  useEffect(() => {
    // console.log("2");
    phaseRefetch();
    SupplyRefetch();
  }, [showModal, no_of_NFTs, address, reload,phase]);

  useEffect(() => {
    getContract();
    // console.log("contractAddress", contractAddress);
  }, []);

  const getContract = async () => {
    try {
      const response = await axios.get(
        `https://qr-code-api.oasisx.world/contract`
      );

      setContractAddress(response.data?.data?.toString());
    } catch (error) {
      console.error(`Error fetching wallet status: ${error}`);
    }
  };

  const fetchWalletStatus = async () => {
    try {
      const response = await axios.get(
        `https://qr-code-api.oasisx.world/check-page/${address}`
      );
      if (response.data.status === "Success") {
        setProof(response.data.data.proof);
        // console.log(proof);
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
    // console.log("address",address);
    // console.log("phase", phase);
    if (phase) {
      if (fetchWalletStatus()) {
        setPrice(ethers.parseEther((0.03 * no_of_NFTs).toString()));
      }
    } else {
      setPrice(ethers.parseEther((0.04 * no_of_NFTs).toString()));
    }
  }, [showModal, no_of_NFTs, address, reload,phase]);

  useEffect(()=>{
     setPrivatePhase(phase);
    //  console.log(phase);
  },[phase])

  useEffect(() => {
    // setPrivatePhase(phase);
    pauseRefetch();
    // console.log("paused", pause);
  }, [
    pause,
    showModal,
    
    no_of_NFTs,
    address,
    reload,
    phase,
  ]);
  useEffect(()=>{
     setTotalSupply(supply);
    //  console.log(supply);
  },[supply])


  const {
    data: MintData,
    isLoading: MintLoading,
    write,
    isSuccess,
   
  } = useContractWrite(config);
  const {
    data: txReceipt,
    error: txError,
    isLoading: txLoading,
    
  } = useWaitForTransaction({ hash: MintData });

      useEffect(() => {
        setReload(true)
        //  setTotalSupply(supply);
        refetch()
        console.log("txLoading", txLoading);
        // console.log("isConfirmed", txReceipt);
      }, [
        MintStatus,
        MintData,
        MintLoading,
        showModal,
        no_of_NFTs,
        address,
        reload,
        phase,
        txLoading,
        txReceipt,
      ]);
  useEffect(() => {
    if (MintData && MintData?.hash) {
      setHash(MintData?.hash);
      // console.log("Mint data",MintData);
    }
  }, [MintData]);
  useEffect(() => {
    setReload(true);
    console.log("MintLoad", MintLoading);
    console.log("MintSuccess", isSuccess);
    refetch();
  }, [MintLoading, isSuccess, reload, txReceipt, pause]);

  const Mint = async () => {
    setReload(true);
    if (error) {
      if (error.message.includes("Mint limit reached")) {
        alert(
          "Your Wallet is not in the whitelist. Please mint in the Public Phase"
        );
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
      await write();
      setShowsModal(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="fidoLeft">
          <center>
            {" "}
            <img className="fidoLogo" style={{}} src={logo} alt="" />
            <h3 style={{ color: "white" }}>
              {" "}
              <b> FIDO DIDO</b> IS A COLLECTION OF <b> 7,777 UNIQUE FIDOS</b>{" "}
              STORED ON THE BLOCKCHAIN, DRAWING INSPIRATION FROM THE VIBRANT
              <b> 90S ERA</b>, COMPLETE WITH COOL <b>COMMERCIAL RIGHTS</b>
            </h3>
            {isConnected && (
              <h4 style={{ color: "white", fontWeight: "lighter" }}>
                {phase == false && `Public Sale`}
                {phase == true && "Private Phase"}
              </h4>
            )}
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
                      disabled={
                         pause || txLoading ? true : false
                      }
                    >
                      {" "}
                      {/* <Countdown date={new Date('2023-12-07T19:00:00')} renderer={renderer({daysInHours})} />{" "} */}
                      { txLoading ? (
                        <img src={loader} width={"35px"} alt="" srcset="" />
                      ) : pause ? (
                        "Minting is paused momentarily"
                      ) : (
                        "Mint"
                      )}
                    </Button>{" "}
                  </a>
                )}
              </div>
            </div>
            <div className="mintIcons" style={{}}>
              <a
                href="https://opensea.io/collection/fido-dido-genesis-cards?tab=items"
                target="_blank"
              >
                {" "}
                <img src={opensea} alt="X Logo" />{" "}
              </a>
              <a
                href={`https://etherscan.io/address/${contractAddress}`}
                target="_blank"
              >
                {" "}
                <img hre src={etherscan} alt="X Logo" />{" "}
              </a>
            </div>
          </center>
        </div>

        <div className="fidoRight">
          <center>
            {" "}
            <h1 style={{ letterSpacing: "2px", fontSize: "35px" }}>
              {" "}
              {supply?.toString() }/7777
            </h1>
          </center>
          <center>
            <img
              src={mintPage_rotation}
              width={"70%"}
              alt="mintPage_rotation gif"
            />{" "}
          </center>
          <div className="socialIcons" style={{}}>
            {/* <a
              
            >
              <img src={opensea1} alt="X Logo" />
            </a> */}
            <a
              href="https://x.com/0xfidodido"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={x_logo} alt="X Logo" />
            </a>
            <a
              href="https://discord.gg/f3xTsPnsqN"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={discord} alt="X Logo" />
            </a>
          </div>
        </div>
        {showModal ? (
          <div className="modal">
            <div className="modal-content-mint">
              <span
                className="close"
                onClick={() => {
                  setShowsModal(false);
                }}
              >
                X
              </span>
              <div className="modalSection">
                <div className="right-section-mint">
                  <center>
                    {" "}
                    <p> MINT IN PROGRESS PLEASE VIEW YOUR TRANSACTION HERE:</p>
                  </center>
                  <a
                    className="transaction"
                    style={{ color: "#009016", textDecoration: "none" }}
                    href={`https://etherscan.io/tx/${MintData?.hash}`}
                    target="_blank"
                  >
                    {" "}
                    <span
                      style={{ maxWidth: "70vw", textDecoration: "underline" }}
                    >
                      {" "}
                      {MintData?.hash}{" "}
                    </span>
                    {/* {MintLoading && (
                      <center>
                        {" "}
                        <img src={loader} width={"35px"} alt="" />{" "}
                      </center>
                    )} */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default MintPage;
