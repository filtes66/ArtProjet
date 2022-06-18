import React, { useState, useEffect, useRef, useCallback } from 'react';
import DiaporamaImage from './DiaporamaImage';
import './Diaporama.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

//let value = 1;

const Diaporama = (props) => {
  let [currentImage, setCurrentImage] = useState(1);
  // let value;

  const renderImage = (side) => {
    const totalImages = props.imageUrls.length;
    if (side === -1 && currentImage === 1) {
      currentImage = totalImages;
    } else if (side === 1 && currentImage === totalImages) {
      currentImage = 1;
    }
    console.log(currentImage);
    setCurrentImage(currentImage);
  };

  useEffect(() => {
    const idInterval = setInterval(() => {
      renderImage(1);
    }, 2000);
    return () => {
      clearInterval(idInterval);
    };
  }, []);

  let currentImageUrl = props.imageUrls[currentImage - 1];
  // console.log('currentImageUrl : ', currentImageUrl);
  console.log('currentImage : ', currentImage);
  return (
    <div
      className="diaporama__wrapper"
      style={{ height: props.height, width: props.width }}
    >
      {props.render(props.images[currentImage - 1])}
      <DiaporamaImage
        imageRoute={props.imageRoute}
        idUrl={currentImageUrl.id}
        imageUrl={currentImageUrl.imageUrl}
      />
      <button className="diaporama__precedent" onClick={() => renderImage(-1)}>
        <FaChevronLeft />
      </button>
      <button
        className="diaporama__suivant"
        aria-label="suivant"
        onClick={() => renderImage(1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Diaporama;
