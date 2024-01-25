
import './walletChecker.css';
import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function WalletChecker() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
     setSearchTerm(event.target.value);
  };
    const importAllImages = (r) => r.keys().map(r);
    const images = importAllImages(
        require.context("../../assets/Links", false, /\.(png|jpe?g|svg|gif|webp)$/)
      );
      console.log(images);
  return (
    <div style={{background:"black"}}>
    <div className="grid-container">
    {images.map((image, index) => (


<div className="grid-item"> <img src={image} height={"120px"} width={"120px"} alt={`${index}`}/></div>
    ))}
    </div>
{/* <center>
    <div className="search-bar">
 <h1 style={{color:"white"}}>Let's See If You Can Mint</h1>
 <div className="input-wrapper">
 <input className="searchbar" type="text" value={searchTerm} onChange={handleInputChange} placeholder='Please Enter Your Wallet Address'/>
 <button className='submitButton' type="submit"><FaArrowRightLong color='white' size={40}/></button>
 </div>
</div>
</center> */}

<center>
    <div className="search-bar">
        <h1 style={{color:"white"}}>Let's See If You Can Mint</h1>
        <div className="input-wrapper">
            <input className="searchbar" type="text" value={searchTerm} onChange={handleInputChange} placeholder='Please Enter Your Wallet Address'/>
            <span className='submitButton'>
                <FaArrowRightLong color='green' size={40}/>
            </span>
        </div>
    </div>
</center>

    </div>
  )
}

export default WalletChecker