import React, { useState, useEffect } from 'react';
import CountdownTimer from '../../components/Countdown';
import MintPage from '../MintPage';
import './wrapper.css'

function MintWrapper() {
 const [isCountdownFinished, setIsCountdownFinished] = useState(null);

 const handleCountdownFinish = () => {
    setIsCountdownFinished(true);
 };

 return (
    <div >
      {isCountdownFinished ? (
        <MintPage />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <center>
        
       
         <div className='waitingText'>  <CountdownTimer onFinish={handleCountdownFinish} /> </div> </center>
         </div>
      )}
    </div>
 );
}

export default MintWrapper;
