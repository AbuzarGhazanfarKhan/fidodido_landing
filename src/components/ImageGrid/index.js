// // src/components/ImageGrid.js
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import './ImageGrid.css';
// import img from "../../assets/images/1.gif"
// import img2 from "../../assets/images/1.gif"

// const ImageGrid = ({ images }) => {

//   console.log(images);
//   console.log(images[0][0].src);
//   return (
//     <Container fluid>
//       {images.map((row, rowIndex) => (
//         <Row key={rowIndex}>
//           {row.map((image, colIndex) => (
            
//             <Col key={colIndex} xs={1} className="grid-item">
//                             <img
//                   src={image.src.default} // Use .default to access the default export of the dynamically imported module
//                   alt={image.alt}
//                 />
//             </Col>
//           ))}
//         </Row>
//       ))}
//       <img src={img2} alt="" />
//     </Container>
//   );
// };

// export default ImageGrid;
import React from 'react';
import { Grid, Paper } from '@mui/material';
// import fifoDido from "../../assets/hanging_fidoDido/Layer 0.png"
import fifoDido from "../../assets/hanging_fidoDido/fido_png.png"
const ImageGrid = ({ images }) => {
  // console.log(images);
  return (
    <>    
      <Grid className='ImgGrid' container justifyContent={'center'} spacing={2}  height={"100%"} style={{position: 'relative'}}>
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
        <img className='fido' src={fifoDido} />
      </Grid>
    </>
  );
};

export default ImageGrid;
