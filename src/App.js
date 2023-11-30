// src/App.js
import React from 'react';
import ImageGrid from './components/ImageGrid';
import images from './images'; // Import your updated images array
import Foorter from './components/Footer';

function App() {

  const importAllImages = (r) => r.keys().map(r);

const images = importAllImages(require.context('./assets/images', false, /\.(png|jpe?g|svg|gif)$/));
console.log(images);
  return (
    <div className="App">
       <br />
    <br />
    
    <center>  <ImageGrid images={images} /></center>
    <br />
    <Foorter/>
    </div>
  );
}

export default App;