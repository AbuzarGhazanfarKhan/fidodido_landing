// // src/images/index.js
// const images = [];

// const importAll = (r) => {
//   return r.keys().map((filename) => ({
//     src: `../../assets/images/${filename.substring(2)}`, // Remove the leading './'
//     alt: `Image ${filename}`,
//   }));
// };

// try {
//   const importedImages = importAll(require.context('../assets/images', false, /\.(png|gif)$/));
//   let index = 0;

//   for (let i = 1; i <= 7; i++) {
//     const row = [];
//     for (let j = 1; j <= 17; j++) {
//       row.push(importedImages[index] || null);
//       index++;
//     }
//     images.push(row);
//   }
// } catch (error) {
//   console.error('Error importing images:', error);
// }

// export default images;
// src/images/index.js
const images = [];
const imageFiles = [];

const importAll = (r) => {
  return r.keys().map((filename) => ({
    src: `../../assets/images/${filename.substring(2)}`, // Remove the leading './'
    alt: `${filename.substring(2)}`,
  }));
};

try {
  const importedImages = importAll(
    require.context("../assets/gifs", false, /\.(png|gif)$/)
  );

  // Assuming a 17x7 grid
  for (let i = 0; i < 7; i++) {
    const row = importedImages.slice(i * 17, (i + 1) * 17);
    images.push(row);
  }
} catch (error) {
  console.error("Error importing images:", error);
}

export default images;
