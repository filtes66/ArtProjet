import React, { useEffect, useReducer, useRef } from 'react';
import DiaporamaImage from './DiaporamaImage';
import './Diaporama.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        currentImage:
          state.currentImage === action.total ? 1 : state.currentImage + 1,
      };
    case 'decrement':
      return {
        currentImage:
          state.currentImage === 1 ? action.total : state.currentImage - 1,
      };
    default:
      throw new Error();
  }
}

const Diaporama = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    currentImage: 1,
  });
  let idInterval = useRef();
  const totalImages = props.imageUrls.length;

  const dispatch2 = (obj) => {
    clearTimeout(idInterval.current);
    dispatch(obj);
  };

  useEffect(() => {
    console.log('useEffect');
    //  const idInterval = setInterval(() => {
    // dispatch({ type: 'increment', total: totalImages });
    idInterval.current = setTimeout(function run() {
      dispatch2({ type: 'increment', total: totalImages });
      idInterval.current = setTimeout(run, 2000);
    }, 2000);
    return () => {
      clearInterval(idInterval.current);
    };
  }, []);

  let currentImageUrl = props.imageUrls[state.currentImage - 1];
  return (
    <div
      className="diaporama__wrapper"
      style={{ height: props.height, width: props.width }}
    >
      {props.render(props.images[state.currentImage - 1])}
      <DiaporamaImage
        imageRoute={props.imageRoute}
        idUrl={currentImageUrl.id}
        imageUrl={currentImageUrl.imageUrl}
      />
      <button
        className="diaporama__precedent"
        aria-label="precedent"
        onClick={() => dispatch2({ type: 'decrement', total: totalImages })}
      >
        <FaChevronLeft />
      </button>
      <button
        className="diaporama__suivant"
        aria-label="suivant"
        onClick={() => dispatch2({ type: 'increment', total: totalImages })}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Diaporama;
