
import React from 'react';
import { Grid, Paper } from '@mui/material';
import './ImageGrid.css';
import fifoDido from "../../assets/hanging_fidoDido/fido_png.png"
import { useMediaQuery } from 'react-responsive';
import Button from "react-bootstrap/Button";
import waitlist from '@zootools/waitlist-js'
import Countdown from "../Countdown"
// import opensea from "../../assets/Logo/Opensea NFT Marketplace.svg"




const ImageGrid = ({ images,mobileImages }) => {
  const clickPopup = (event) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("EI7h0QshP1hLQy11sdy4")
  }

  const isMobile = useMediaQuery({query:'(max-width:600px)'});


  return (
    <>    


  { isMobile ?  
  <Grid container spacing={3}>
      {mobileImages.map((image, index) => (
        <Grid item xs={4} key={index}>
          <Paper style={{ 
            // height: '100%', 
            height: '125px', 
           width:'100px',
            backgroundImage: `url(${image})`, 
            backgroundSize: 'contain', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }} />
        </Grid>
      ))}
      <br />
      <br />
      <Grid item xs={4}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
       <a  > <Button disabled className='Button' style={{minWidth:"76px",fontSize:"8px",backgroundColor:"#009016",color:"white"}} ><Countdown/></Button></a>
      </Grid>
      <Grid item xs={4}>
        <Button  className='Button' style={{minWidth:"76px",fontSize:"8px"}} onClick={clickPopup}>Join The Club</Button>
      </Grid>
      <Grid item xs={4}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
       <a   href="https://mirror.xyz/0xbeb122E9f83cd44099D51c77a312AcF2357Ac5e0/9c8Z2FmlcM3Jey1LpSVbQliQJ6Q73_L8JzdIXyJOLyQ"
                target="_blank" rel="noopener noreferrer"> <Button className='Button'  style={{minWidth:"92px",fontSize:"8px"}} > FAQs </Button></a>
      </Grid>
    </Grid>
    :   <Grid className='ImgGrid' container justifyContent={'center'} spacing={2}  height={"100%"} style={{position: 'relative'}}>
         {images.map((image, index) => (
        <Grid item  key={index}>
       <Paper className='paper' style={{ 
          height: '97px', 
          width:'78px',
              
          backgroundImage: `url(${image})`, 
           backgroundSize: 'contain', 
         backgroundPosition: 'center center',
           backgroundRepeat: 'no-repeat'
        }} />
       </Grid>
     ))}
     
    <img className='fido' src={fifoDido} alt=''/>
      </Grid>} 
    { isMobile &&  <center>  <br /> 
    
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="https://t.co/uIw2DPr9UF" title="Buy on OpenSea" target="_blank" rel="noopener noreferrer">
      <img style={{width:"120px", borderRadius:"5px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)"}} src="https://storage.googleapis.com/opensea-static/Badge/Badge%20-%20Available%20On%20-%20Light.png" alt="Available on OpenSea" /></a></center>}
    </>
  );
};

export default ImageGrid;
