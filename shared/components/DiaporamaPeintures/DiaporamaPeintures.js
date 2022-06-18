import React from 'react';
import Diaporama from '../Diaporama/Diaporama';
import DiaporamaPeintureTexte from './DiaporamaPeintureTexte';
import useFetchPresentation from '../../hooks/useFetchPresentation';
import { REACT_APP_BASE_URL } from '../../../constants/environment';

function DiaporamaPeintures(props) {
  console.log('REACT_APP_BASE_URL : ', REACT_APP_BASE_URL);

  let DiaporamaInitialData;

  if (__isBrowser__) {
    DiaporamaInitialData = window.__INITIAL_DATA__;
  } else {
    DiaporamaInitialData = props.SSRData;
  }

  let peintureImageUrls = [];

  const peintureImages = useFetchPresentation(
    `${REACT_APP_BASE_URL}/oeuvre`,
    DiaporamaInitialData,
  );

  if (!peintureImages && __isBrowser__) {
    return null;
  }
  for (let i = 0; i < peintureImages.length; i++) {
    peintureImageUrls.push({
      imageUrl: `${REACT_APP_BASE_URL}/image/${peintureImages[i].image_oeuvre}`,
      id: peintureImages[i].id_oeuvre,
    });
  }
  return (
    <Diaporama
      imageUrls={peintureImageUrls}
      images={peintureImages}
      width={props.width}
      height={props.height}
      imageRoute={'presentation-de-l-oeuvre'}
      render={(data) => (
        <DiaporamaPeintureTexte
          nomOeuvre={data.nom_oeuvre}
          nomPeintre={data.nom_peintre}
          prenomPeintre={data.prenom_peintre}
          dateOeuvre={data.date_oeuvre}
          nomSource={data.nom_source}
          rightsSource={data.rights_source}
        />
      )}
    />
  );
}

export default DiaporamaPeintures;
