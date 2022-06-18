import React, { useState, useEffect, useRef, useCallback } from 'react';
import DiaporamaImage from './DiaporamaImage';
import './Diaporama.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Diaporama = (props) => {
  let value = useRef();
  console.log('value : ', value);
  let [currentImage, setCurrentImage] = useState(1);

  const renderImage = (side) => {
    if (typeof value.current === 'undefined') {
      value.current = currentImage;
    }
    const totalImages = props.imageUrls.length;
    //  setCurrentImage((currentImage) => {
    if (side === -1 && value.current === 1) {
      value.current = totalImages;
    } else if (side === 1 && value.current === totalImages) {
      value.current = 1;
    }
    //  return currentImage + side;
    value.current += side;
    setCurrentImage(value.current);
    //  });
  };

  useEffect(() => {
    const idInterval = setInterval(() => {
      renderImage(1);
    }, 2000);
    return () => {
      clearInterval(idInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let currentImageUrl = props.imageUrls[currentImage - 1];
  console.log('currentImageUrl : ', currentImageUrl);
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
