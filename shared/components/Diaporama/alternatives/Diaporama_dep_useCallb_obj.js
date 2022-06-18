import React, { useState, useEffect, useCallback } from 'react';
import DiaporamaImage from './DiaporamaImage';
import './Diaporama.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Diaporama = (props) => {
  let [currentImage, setCurrentImage] = useState(1);
  const totalImages = props.imageUrls.length;
  const idInterval = useRef();
  const [diapoPause, setDiapoPause] = useState(false);

  const renderImage = useCallback(() => {
    let newCurrentImage = currentImage;
    const changeState = (side) => {
      if (side === -1 && currentImage === 1) {
        newCurrentImage = totalImages + 1;
      } else if (side === 1 && currentImage === totalImages) {
        newCurrentImage = 0;
      }
      console.log('currentImage renderImage : ', currentImage);
      setCurrentImage(newCurrentImage + side);
    };
    return {
      suivant: () => changeState(1),
      precedent: () => changeState(-1),
    };
  }, [currentImage]);

  const handleRenderImage = (side) => {
    setDiapoPause(true);
    renderImage(side);
  };

  const handlePauseDiapo = () => {
    setDiapoPause(true);
  };

  const handleStartDiapo = () => {
    setDiapoPause(false);
  };

  useEffect(() => {
    console.log('useeffect');
    idInterval.current = setInterval(() => renderImage(1), 2000);
    if (diapoPause) {
      clearInterval(idInterval.current);
    }
    return () => clearInterval(idInterval.current);
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
      <button
        className="diaporama__precedent"
        onClick={() => renderImage().precedent()}
        onMouseOut={handleStartDiapo}
      >
        <FaChevronLeft />
      </button>
      <button
        className="diaporama__suivant"
        aria-label="suivant"
        onClick={() => renderImage().suivant()}
        onMouseOut={handleStartDiapo}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Diaporama;
