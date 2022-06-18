import React, { useState, useEffect } from 'react';
import Diaporama from '../Diaporama/Diaporama';
import DiaporamaExpositionTexte from './DiaporamaExpositionTexte';
import fetchDat from '../../services/fetchDat';
import { REACT_APP_BASE_URL } from '../../../constants/environment';
import './DiaporamaExpositions.css';

function DiaporamaExpositions(props) {
  let DiaporamaInitialData;
  /*let isBrowser =
    props.isBrowser !== undefined ? props.isBrowser : __isBrowser__;*/
  if (__isBrowser__) {
    DiaporamaInitialData = window.__INITIAL_DATA__;
  } else {
    DiaporamaInitialData = props.oeuvreData;
  }

  const [exposition, setExposition] = useState(DiaporamaInitialData);
  let expositionImageUrls = [];

  console.log(
    'isBrowser',
    __isBrowser__,
    'Diaporamainitialdata',
    window.__INITIAL_DATA__,
    'props',
    props,
    'exposition',
    exposition,
  );

  useEffect(() => {
    console.log('url', `${REACT_APP_BASE_URL}/diaporamaExposition`);
    const getData = async () => {
      const response = await fetchDat(
        `${REACT_APP_BASE_URL}/diaporamaExposition`,
      );
      setExposition(response);
    };
    if (window.__INITIAL_DATA__) {
      delete window.__INITIAL_DATA__;
    } else {
      getData();
    }
  }, []);
  console.log('!exposition', !exposition);
  console.log('!exposition && __isBrowser__', !exposition && __isBrowser__);
  if (!exposition && __isBrowser__) {
    return null;
  }
  console.log('exposition : ', exposition);
  for (let i = 0; i < exposition.length; i++) {
    expositionImageUrls.push({
      imageUrl: `${REACT_APP_BASE_URL}/image/${exposition[i].image_exposition}`,
      id: exposition[i].id_exposition,
    });
  }

  return (
    <Diaporama
      imageUrls={expositionImageUrls}
      images={exposition}
      width={props.width}
      height={props.height}
      imageRoute={'presentation-de-l-exposition'}
      render={(data) => (
        <DiaporamaExpositionTexte
          nom_exposition={data.nom_exposition}
          nom_musee={data.nom_musee}
          date_debut={data.date_debut}
          date_fin={data.date_fin}
        />
      )}
    />
  );
}

export default DiaporamaExpositions;
