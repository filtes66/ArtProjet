import React, { useState, useEffect } from 'react';
import Diaporama from '../Diaporama/Diaporama';
import DiaporamaExpositionTexte from './DiaporamaExpositionTexte';
import fetchDat from '../../services/fetchDat';
import { REACT_APP_BASE_URL } from '../../../constants/environment';
import './DiaporamaExpositions.css';

function DiaporamaExpositions(props) {
  let DiaporamaInitialData;
  if (__isBrowser__) {
    DiaporamaInitialData = window.__INITIAL_DATA__;
  } else {
    DiaporamaInitialData = props.oeuvreData;
  }

  const [exposition, setExposition] = useState(DiaporamaInitialData);

  console.log('exposition', exposition)

  useEffect(() => {
    const getData = async () => {
      const response = await fetchDat(
        `${REACT_APP_BASE_URL}/diaporamaExposition`,
      );
      console.log("response", response)
      setExposition(response);
    };
    if (window.__INITIAL_DATA__) {
      delete window.__INITIAL_DATA__;
      console.log("delete windowinitialdata")
    } else {
      getData();
    }
  }, []);

  if (!exposition && __isBrowser__) {
    return null;
  }

  const expositionImageUrls = exposition.map(exposition => ({
    imageUrl: `${REACT_APP_BASE_URL}/image/${exposition.image_exposition} `,
    id: exposition.id_exposition
  }))


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
