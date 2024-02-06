
import './walletChecker.css';
import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import okFido from '../../assets/Links/10.webp'
import NoFido from '../../assets/Links/37.webp'
import loader from '../../assets/loader/loader.gif'
import axios from "axios";

function WalletChecker() {
    const [showModal, setShowsModal] = useState(false);
    const [address, setAddress] = useState("")
    const [verify, setVerify] = useState("loading")

    const handleInputChange = event => {
        setAddress(event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            setVerify("loading")
            fetchWalletStatus();
        }
      };

    const fetchWalletStatus = async () => {
        setShowsModal(true)
        try {
            const response = await axios.get(`https://qr-code-api.oasisx.world/check-wallet/${address}`);
            if (response.data.status === "Success") {
                setVerify("true")
                
            } else {
                setVerify("false")
            }
        } catch (error) {
            console.error(`Error fetching wallet status: ${error}`);
        }
    };

    const importAllImages = (r) => r.keys().map(r);
    const images = importAllImages(
        require.context("../../assets/Links", false, /\.(png|jpe?g|svg|gif|webp)$/)
    );
    return (
      <div style={{ background: "black" }}>
        <div className="grid-container">
          {images.map((image, index) => (
            <div className="grid-item">
              {" "}
              <img src={image} alt={` ${index}`} />
            </div>
          ))}
        </div>

        <center>
          <div className="search-bar">
            <h1 style={{ color: "white" }}>LET'S SEE IF YOU CAN MINT</h1>
            <div className="input-wrapper">
              <center>
                {" "}
                <input
                  className="searchbar"
                  onKeyDown={handleKeyDown}
                  type="text"
                  value={address}
                  onChange={handleInputChange}
                  placeholder="Please Enter Your Wallet Address"
                />
                <span onClick={fetchWalletStatus} className="submitButton">
                  <FaArrowRightLong color="#009016" size={40} />
                </span>
              </center>
            </div>
          </div>
        </center>
        {showModal ? (
          <div className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => {
                  setShowsModal(false);
                  setVerify("loading");
                }}
              >
                X
              </span>
              <div className="modalSection">
                {verify === "true" ? (
                  <>
                    <div className="left-section">
                      <img src={okFido} alt="" />
                    </div>
                    <div className="right-section">
                      <p>YOUR JOURNEY STARTS NOW, YOU'VE BEEN WHITELISTED</p>
                    </div>
                  </>
                ) : verify === "false" ? (
                  <>
                    <div className="left-section">
                      <img src={NoFido} alt="" />
                    </div>
                    <div className="right-section">
                      <p> BETTER LUCK NEXT TIME, {" "} STAY COOL 😎</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="left-section">
                      <img src={loader} alt="" />
                    </div>
                    <div className="right-section">
                      <p>
                        {" "}
                        <b>Fetching .... </b>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
}

export default WalletChecker