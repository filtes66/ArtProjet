import React, { useState, useEffect, useRef, useCallback } from 'react';
import DiaporamaImage from './DiaporamaImage';
import './Diaporama.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Diaporama = (props) => {
  let [currentImage, setCurrentImage] = useState(1);
  //  let totalImages = useRef(props.imageUrls.length);

  const renderImage = (side) => {
    const totalImages = props.imageUrls.length;
    setCurrentImage((currentImage) => {
      if (side === -1 && currentImage === 1) {
        currentImage = totalImages + 1;
      } else if (side === 1 && currentImage === totalImages) {
        currentImage = 0;
      }
      console.log('curentImage : ', currentImage);
      return currentImage + side;
    });
  };

  useEffect(() => {
    console.log('useEffect');
    console.log('currentImageuseEffect : ', currentImage);
    const idInterval = setInterval(() => {
      console.log('currentImage setInterval : ', currentImage);
      renderImage(1);
    }, 2000);
    return () => {
      clearInterval(idInterval);
    };
  }, []);

  let currentImageUrl = props.imageUrls[currentImage - 1];
  console.log('currentImageUrl : ', currentImageUrl);
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
