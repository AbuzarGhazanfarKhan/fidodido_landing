
import './walletChecker.css';
import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import okFido from '../../assets/Links/10.webp'

function WalletChecker() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowsModal] = useState(false);

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    // const fetchWalletStatus = async () => {
    //     try {
    //       const response = await axios.get(`https://qr-code-api.oasisx.world/check-wallet/${address}`);
    //       if (response.data.status === "Success") {
    //         setProof(response.data.data.proof)
    //         return true
    //       } else {
    //         return false
    //       }
    //     } catch (error) {
    //       console.error(`Error fetching wallet status: ${error}`);
    //     }
    // };

    const importAllImages = (r) => r.keys().map(r);
    const images = importAllImages(
        require.context("../../assets/Links", false, /\.(png|jpe?g|svg|gif|webp)$/)
    );
    console.log(images);
    return (
        <div style={{ background: "black" }}>
            <div className="grid-container">

                {images.map((image, index) => (


                    <div className="grid-item"> <img src={image} alt={` ${index}`} /></div>
                ))}
            </div>


            <center>
                <div className="search-bar">
                    <h1 style={{ color: "white" }}>Let's See If You Can Mint</h1>
                    <div className="input-wrapper">
                    <center>    <input className="searchbar" type="text" value={searchTerm} onChange={handleInputChange} placeholder='Please Enter Your Wallet Address' />
                        <span onClick={()=>setShowsModal(true)} className='submitButton'>
                            <FaArrowRightLong color='#009016' size={40} />
                        </span>
                        </center>
                    </div>
                </div>
            </center>
            {showModal ? (
        <div className="modal">
          <div className="modal-content">
          <span className="close" onClick={()=>setShowsModal(false)}>X</span>
          <div className='modalSection'>
            <div className="left-section">
              <img src={okFido} alt="" />
            </div>
            <div className="right-section">
              <p>YOUR JOURNEY STARTS NOW, 
YOU’VE BEEN WHITELISTED</p>
            </div>
            </div>
          </div>
        </div>
      ) : null}
        </div>
    )
}

export default WalletChecker