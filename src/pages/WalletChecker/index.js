
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
        require.context("../../assets/Links", false, /\.(png|jpe?g|svg|gif)$/)
      );
      console.log(images);
  return (
    <>
    <div class="grid-container">
    {images.map((image, index) => (


<div class="grid-item"> <img src={image} height={"120px"} width={"120px"} alt={`image ${index}`}/></div>
    ))}
    </div>
<center>
    <div className="search-bar">
 <h1 style={{color:"white"}}>Let's See If You Can Mint</h1>
 <div className="input-wrapper">
 <input className="searchbar" type="text" value={searchTerm} onChange={handleInputChange} placeholder='Please Enter Your Wallet Address'/>
 <button className='submitButton' type="submit"><FaArrowRightLong color='white' size={40}/></button>
 </div>
</div>
</center>
    </>
  )
}

export default WalletChecker