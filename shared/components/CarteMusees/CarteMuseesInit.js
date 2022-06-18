import React, { useState, useEffect } from 'react';
import { getData } from '../../services/getData';
import { REACT_APP_BASE_URL } from '../../../constants/environment';
import CarteMusees from './CarteMusees';

function CarteMuseesInit() {
  let museeInitialData;

  if (__isBrowser__) {
    museeInitialData = window.__INITIAL_DATA__;
  }

  const [museeData, setMuseeData] = useState(museeInitialData);

  useEffect(() => {
    if (window.__INITIAL_DATA__) {
      delete window.__INITIAL_DATA__;
    } else {
      getData(`${REACT_APP_BASE_URL}/musee`).then((response) =>
        setMuseeData(response),
      );
    }
  }, []);

  if (!__isBrowser__ || !museeData) {
    return null;
  }
  return <CarteMusees site={museeData} />;
}

export default CarteMuseesInit;
