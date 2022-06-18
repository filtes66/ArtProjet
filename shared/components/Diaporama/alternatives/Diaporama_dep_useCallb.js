import React, { useState, useEffect, useCallback } from 'react';
import DiaporamaImage from './DiaporamaImage';
import './Diaporama.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Diaporama = (props) => {
  let [currentImage, setCurrentImage] = useState(1);
  const totalImages = props.imageUrls.length;

  const renderImage = useCallback(
    (side) => {
      let newCurrentImage = currentImage;
      if (side === -1 && currentImage === 1) {
        newCurrentImage = totalImages + 1;
      } else if (side === 1 && currentImage === totalImages) {
        newCurrentImage = 0;
      }
      console.log('currentImage renderImage : ', currentImage);
      setCurrentImage(newCurrentImage + side);
    },
    [currentImage],
  );

  useEffect(() => {
    const idInterval = setInterval(() => {
      renderImage(1);
    }, 2000);
    return () => {
      clearInterval(idInterval);
    };
  }, [renderImage]);

  console.log('currentImageRender : ', currentImage);
  let currentImageUrl = props.imageUrls[currentImage - 1];

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
