import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import RenderImage from '../RenderImage/RenderImage';
import './Diaporama.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Diaporama = (props) => {
  const [currentImage, setCurrentImage] = useState(1);
  const [diapoPause, setDiapoPause] = useState(false);
  const totalImages = props.imageUrls.length;
  const idInterval = useRef();

  const renderImage = useCallback(() => {
    let newCurrentImage = currentImage;
    const changeState = (side) => {
      if (side === -1 && currentImage === 1) {
        newCurrentImage = totalImages + 1;
      } else if (side === 1 && currentImage === totalImages) {
        newCurrentImage = 0;
      }
      setCurrentImage(newCurrentImage + side);
    };
    return {
      suivant: () => changeState(1),
      precedent: () => changeState(-1),
    };
  }, [currentImage]);

  const handleRenderImage = (side) => {
    setDiapoPause(true);
    side === 'suivant' && renderImage().suivant();
    side === 'precedant' && renderImage().precedent();
  };

  const handlePauseDiapo = () => setDiapoPause(true);
  const handleStartDiapo = () => setDiapoPause(false);
  useEffect(() => {
    idInterval.current = setInterval(() => renderImage().suivant(), 2000);
    if (diapoPause) {
      clearInterval(idInterval.current);
    }
    return () => clearInterval(idInterval.current);
  }, [renderImage, diapoPause]);

  let currentImageUrl = props.imageUrls[currentImage - 1];
  return (
    <div
      className="diaporama__wrapper"
      style={{ height: props.height, width: props.width }}
    >
      {props.render(props.images[currentImage - 1])}
      <Link
        to={`/${props.imageRoute}/${currentImageUrl.id}`}
        onMouseOver={handlePauseDiapo}
        onMouseOut={handleStartDiapo}
      >
        <RenderImage
          imageUrl={currentImageUrl.imageUrl}
          height={props.height}
        />
      </Link>
      <button
        className="diaporama__precedent"
        onClick={() => handleRenderImage('precedant')}
        onMouseOut={handleStartDiapo}
        data-testid="LeftButtonTest"
      >
        <FaChevronLeft />
      </button>
      <button
        className="diaporama__suivant"
        onClick={() => handleRenderImage('suivant')}
        onMouseOut={handleStartDiapo}
        data-testid="RightButtonTest"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Diaporama;
